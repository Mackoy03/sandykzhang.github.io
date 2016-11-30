$(document).ready(function() {
  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $(".sidebar-container").hover(function() {
        $(this).css("width", "40%");
        $(".section").css("width", "60%");
        $(".section").css("left", "40%");
  });

  $(".section").hover(function() {
        $(".sidebar-container").css("width", "30%");
        $(".section").css("width", "70%");
        $(".section").css("left", "30%");
  });

  $(".sidebar-item").click(function() {
        $(".section").hide();
        var id = $(this).attr("id");
        var sectionID = "#" + id + "-section";
        $(sectionID).show();
  });
});