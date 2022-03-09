$(document).ready(() => {
  function load_content(loadstr) {
    $("main").load("pages/" + loadstr + ".html");
  };

  $("#loading").addClass(".d-none");
  load_content("about"); // Default page

  

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
    //console.log(loadstr);
    load_content(loadstr);
  });
});
