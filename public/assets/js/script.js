
$(function() {

    //DEVOUR PUT REQUEST
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/api/devour/" + id, {
        type: "PUT"
      }).then(
        function() {
          location.reload();
        }
      );
    });

    //ADD NEW BURGER POST REQUEST
    $("#burgerPostForm").on("submit", function(event) {
      event.preventDefault();
        
      var newBurger =  {
          name: $("#newBurger").val().trim()
      }
  
      $.ajax("/api/new", {
        type: "POST",
        data: newBurger
        
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
  });
  
  