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

export default loadImages;
