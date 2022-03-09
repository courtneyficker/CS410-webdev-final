$(document).ready(() => {

  function load_content(loadstr) {
    // .load("pages/example.html #example")
    $("main").load("pages/" + loadstr + ".html #" + loadstr, function() {
      console.log("Loaded " + loadstr);
      console.log($("form").attr("name"));
    });
  };

  $("#loading").addClass(".d-none");  // Hide spinner
  load_content("about");              // Load default page ("About")

  $("#contact-form").submit(function(event) {
    console.log("clicked");
    // Check for required fields
    let fn = this.find("fullname");
    let e = this.find("email");
    console.group("========= Form Submission =========");
    console.log("Name: " + fn.value);
    console.log("Email: " + e.value);
    console.log("Message:\n" + this.find("message").value);
    console.groupEnd();
    event.preventDefault();
  });

  $(".nav-link").on("click", function () {
    function mark_active(curr) {
      // Remove active class from previous link, and add it to the one just clicked
      $(".active").removeClass("active");
      curr.addClass("active");
    }

    // Mark the tab just clicked as being active, then load the content
    mark_active($(this));
    let id = $(this).attr("id");
    load_content(id);
  });
});
