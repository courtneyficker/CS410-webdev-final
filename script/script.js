$(document).ready(() => {

  function load_content(loadstr) {
    // .load("pages/example.html #example")
    $("main").load("pages/" + loadstr + ".html #" + loadstr, function() {
      console.log("Loaded " + loadstr);
    });
  };

  $("#loading").addClass(".d-none");  // Hide spinner
  load_content("about");              // Load default page ("About")

  $(document).on('submit','#contact-form',function(event){
    console.log("form submitted");
    console.group("========= Form Submission =========");
    console.log("Name: " + $('#fullname').val());
    console.log("Email: " + $('#email').val());
    console.log("Message: " + $('#message').val());
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
