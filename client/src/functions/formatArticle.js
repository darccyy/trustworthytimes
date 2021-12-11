import React from "react";

// Format article array into component with styles
export default function formatArticle(array) {
  if (!array || array.constructor !== Array || array.length < 1) {
    array = [
      "This is a news article.",
      "Blah blah blah.",
      "This either hasn't loaded yet, or something has gone wrong.",
      "Reload the page if this continues.",
      "Or report an issue on GitHub.",
    ];
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

                string = `<h${header + 1}>  ${string.slice(header + 1)}</h${
                  header + 1
                }>`;
              }
            } else if (string.startsWith("-")) {
              string = `<li key=${j}>${string.slice(2)}</li>`;
            } else if (parseInt(string.split(".")[0]) == string.split(".")[0]) {
              string = `<li key=${j} class="number"><b>${
                string.split(".")[0]
              }.</b>${string.split(".").slice(1).join(".")}</li>`;
            }

            if (string === "") {
              string = "<br>";
            }
            string = string.replaceAll("\n", "<br>");

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
