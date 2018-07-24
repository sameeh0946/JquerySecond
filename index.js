 $(document).ready(function(){
     
      
      $('button').hover(function() {
      $(this).addClass("hover");
      console.log("div was hovered");
                                           }, function() {
        $(this).removeClass("hover");
                                                            });
     $('button').click(function(){
         
         $(".hidden").toggle();
     } )
     
     
     
     
     
     });