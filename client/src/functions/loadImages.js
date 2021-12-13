import $ from "jquery";

// Add classes for unloaded / broken images
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
