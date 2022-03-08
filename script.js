$(document).ready(() => {
    $('#temp').text("Courtney's page");
    
  });

function mark_active(curr) {
  $(".nav-link").removeClass("active");
  curr.addClass("active");
}

$(".nav-link").on('click', function () {
  console.log($(this))
  alert($(this).attr("id"));
  mark_active($(this));
});
