$(function() {

 $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
