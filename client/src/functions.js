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
  if (!array || array.constructor !== Array) {
    return "This is a news article";
  }

  var formats = { em: "/", strong: "*", u: "_" };

  return array.map(line => {
    return (
      <div key={line}>
        <span>
          {(() => {
            var string = "";
            var escaped = false;
            var format = {};
            var style = ["", ""];
            var scope = "";

            I: for (var i in line) {
              var char = line[i];

              if (!escaped) {
                if (char === "~") {
                  escaped = true;
                  continue;
                }

                if (!scope) {
                  if ("{[".includes(char)) {
                    scope = char;
                    continue;
                  }
                } else if ("}]".includes(char)) {
                  scope = "";
                  if (char === "]") {
                    string += `<span style="${style[0]}">${style[1]}</span>`;

                    style = ["", ""];
                  }
                  continue;
                }

                if (scope === "{") {
                  style[0] += char;
                  continue;
                } else if (scope === "[") {
                  style[1] += char;
                  continue;
                }

                for (var j in formats) {
                  if (char === formats[j]) {
                    format[j] = !format[j];
                    string += `<${format[j] ? "" : "/"}${j}>`;
                    continue I;
                  }
                }
              }

              if (char !== "~") {
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
            }

            string = (
              <span
                dangerouslySetInnerHTML={{
                  __html: string,
                }}
              ></span>
            );

            return string;
          })()}
        </span>
      </div>
    );
  });
}

export { loadImages, formatArticle };
