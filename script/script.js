$(document).ready(() => {
  $("#loading").addClass(".d-none");

  $(".nav-link").on("click", function () {
    function mark_active(curr) {
      // Remove active class from previous link, and add it to the one just clicked
      $(".active").removeClass("active");
      curr.addClass("active");
    }

    mark_active($(this));

    // Need to replace this with something useful (loading content)
    console.log("Loading content: " + $(this).attr("id"));
    $("main").load("pages/lorem.html #lorem");
  });
});
