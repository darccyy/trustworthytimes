import React from "react";

// Format article array into component with styles
export default function formatArticle(array) {
  // Default article for skeleton loading and errors
  if (!array || array.constructor !== Array || array.length < 1) {
    array = [
      "This is a news article.",
      "Blah blah blah.",
      "This either hasn't loaded yet, or something has gone wrong.",
      "Reload the page if this continues.",
      "Or report an issue on GitHub.",
    ];
  }

  // Syntax symbols
  var formats = { i: "/", b: "*", u: "_", s: "~", code: "`" };

  return array.map((line, i) => {
    return (
      <div key={i}>
        <span>
          {(() => {
            var string = "";
            var escaped = false;
            var format = {};
            // 
            var span = { style: "", link: "", text: "", scope: "" };

            I: for (var j in line) {
              var char = line[j];

              // Ignore if escape character active
              if (!escaped) {
                // Escape character
                if (char === "^") {
                  escaped = true;
                  continue;
                }

                if (!span.scope) {
                  // Add scope
                  if ("<{[".includes(char)) {
                    span.scope = char;
                    continue;
                  }
                } else if (">}]".includes(char)) {
                  // Reset styles when scope ends
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

                // Add scope
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

                // Add basic style tags
                for (var k in formats) {
                  if (char === formats[k]) {
                    format[k] = !format[k];
                    string += `<${format[k] ? "" : "/"}${k}>`;
                    continue I;
                  }
                }
              }

              // Escape character
              if (char !== "^") {
                escaped = false;
              }

              string += char;
            }

            // Other syntax highlighting
            if (string.startsWith("> ")) {
              // Quote
              string = `<blockquote>${string.slice(2)}</blockquote>`;
            } else if (string.startsWith("#")) {
              // Header
              var header = string.split(" ")[0];
              if (!header.split("#").join("")) {
                header = header.length;

                string = `<h${header + 1}>  ${string.slice(header + 1)}</h${
                  header + 1
                }>`;
              }
            } else if (string.startsWith("-")) {
              // Unordered list (Without <ul> tag)
              string = `<li key=${j}>${string.slice(2)}</li>`;
            } else if (parseInt(string.split(".")[0]) == string.split(".")[0]) {
              // Ordered list (Without <ol> tag)
              string = `<li key=${j} class="number"><b>${
                string.split(".")[0]
              }.</b>${string.split(".").slice(1).join(".")}</li>`;
            }

            // Linebreak
            string = string.replaceAll("\n", "<br>");

            // Inner html for line
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
