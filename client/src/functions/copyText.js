// Copy text to clipboard
export default function copyText(text) {
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand("copy");
    } catch (err) { }
    
    document.body.removeChild(textArea);
    return;
  }

  navigator.clipboard.writeText(text).then(
    function () {},
    function (err) {
      throw err;
    },
  );
}
