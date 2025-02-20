$(document).ready(function(){
   $(".navbar-toggler-icon").click(function(){
    
    $(".popup").css("display","block")
    $(".navbar").removeClass("fixed-top");
    $(".cross-button").click(function(){
      $(".popup").css("display","none")
    })
   })
})