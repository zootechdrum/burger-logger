$(document).ready(function () {

    function cuteHide(el) {
      el.animate({opacity: '0'}, 150, function(){
        el.animate({height: '0px'}, 150, function(){
          el.remove();
        });
      });
    }
$(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");
  
    $('.burgersStat').on('click',".delete-burger", function(){
      var el = $(this).closest('.indi-burger');
      cuteHide(el);
    });
  })
    // Send the DELETE request.
  //   $.ajax("/api/burger/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       // Reload the page to get the updated list
  //       setTimeout(function(){location.reload(); }, 2000);
  //     }
  //   );
  // });
});


