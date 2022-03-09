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
    let id = $(this).attr("id");
    console.log("Loading content: " + id);
    let loadstr = "pages/" + id + ".html #" + id;
    console.log(loadstr);
    $("main").load(loadstr);
  });
});
