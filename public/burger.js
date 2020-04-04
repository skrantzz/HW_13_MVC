// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    // $(".devoured").on("click", function(event) {
    //   var id = $(this).data("id");
    //   var newSleep = $(this).data("newsleep");
  
    //   var newSleepState = {
    //     sleepy: newSleep
    //   };
  
      // Send the PUT request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "PUT",
    //     data: newSleepState
    //   }).then(
    //     function() {
    //       console.log("changed sleep to", newSleep);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
    $('.item-button').on('click', function() {
        console.log('click')
        var devoured = $(this).data('devoured')
        var id = $(this).data('id')
        console.log(devoured)
        console.log(id)

        $.ajax(`/api/burgers/${id}`, {
            type: 'PUT',
            data: { devoured: 1}
        })
    })  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#ca").val(),
        devoured: $("[burger_name=devoured]:checked").val()
      };
  
    //   do another ajax here, PUT not post, updating burger
    // send devoured1 (new object)
      // Send the POST request.
      $.ajax("/api/burgers/", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  