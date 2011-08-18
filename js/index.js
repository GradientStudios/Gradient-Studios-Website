$(document).ready(function() {
    
  if($("div#pic").css('display') == 'none') {
    
    $("div#pic img").attr('alt', 'Group photo of Gradient Studios employees');
    $("div#pic img").attr('src', 'images/gradient.png');
    
    $("div#footer").html("&uarr;&nbsp;&uarr;&nbsp;&darr;&nbsp;&darr;&nbsp;&larr;&nbsp;&rarr;&nbsp;&larr;&nbsp;&rarr;&nbsp;b&nbsp;a&nbsp;&crarr;");

    konami = new Konami()
    konami.code = function() {
      $("div#pic").fadeIn("slow");
    }
    konami.load()

    $("div#pic").click(function () { 
      $(this).fadeOut(); 
    });
    
  }

});