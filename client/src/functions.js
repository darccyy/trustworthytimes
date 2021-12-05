import React from "react";
import $ from "jquery";

function loadImages() {
  $(".unloaded").each((i, e) => {
    $(e).on("load", () => {
      $(e).removeClass("unloaded");
    });
    $(e).on("error", () => {
      $(e).removeClass("unloaded");
      $(e).addClass("error");
    });
  });
}

function formatArticle(array) {
  if (!array || array.constructor !== Array || array.length < 1) {
    return "This is a news article";
  }

  var formats = { i: "/", b: "*", u: "_", s: "~", code: "`" };

  return array.map((line, i) => {
    return (
      <div key={i}>
        <span>
          {(() => {
            var string = "";
            var escaped = false;
            var format = {};
            var span = { style: "", link: "", text: "", scope: "" };

            I: for (var j in line) {
              var char = line[j];

              if (!escaped) {
                if (char === "^") {
                  escaped = true;
                  continue;
                }

                if (!span.scope) {
                  if ("<{[".includes(char)) {
                    span.scope = char;
                    continue;
                  }
                } else if (">}]".includes(char)) {
                  span.scope = "";
                  if (char === "]") {
                    if (span.link) {
                      string += `<a href="${span.link}" style="${span.style}">${span.text}</a>`;
                    } else {
                      string += `<span style="${span.style}">${span.text}</span>`;
                    }

                    span = { style: "", link: "", text: "" };
                  }
                  continue;
                }

                if (span.scope === "{") {
                  span.style += char;
                  continue;
                } else if (span.scope === "<") {
                  span.link += char;
                  continue;
                } else if (span.scope === "[") {
                  span.text += char;
                  continue;
                }

                for (var k in formats) {
                  if (char === formats[k]) {
                    format[k] = !format[k];
                    string += `<${format[k] ? "" : "/"}${k}>`;
                    continue I;
                  }
                }
              }

              if (char !== "^") {
                escaped = false;
              }

              string += char;
            }

            if (string.startsWith("> ")) {
              string = `<blockquote>${string.slice(2)}</blockquote>`;
            } else if (string.startsWith("#")) {
              var header = string.split(" ")[0];
              if (!header.split("#").join("")) {
                header = header.length;

                string = `<h${header}>  ${string.slice(
                  header + 1,
                )}</h${header}>`;
              }
            } else if (string.startsWith("-")) {
              string = `<li key=${j}>${string.slice(2)}</li>`;
            }

            if (string === "") {
              string = "<br>";
            }

            return (
              <span
                dangerouslySetInnerHTML={{
                  __html: string,
                }}
              ></span>
            );
          })()}
        </span>
      </div>
    );
  });
}

export { loadImages, formatArticle };
