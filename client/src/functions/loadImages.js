import $ from "jquery";

// Preload image (Maybe not working?)
export default function loadImages() {
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
