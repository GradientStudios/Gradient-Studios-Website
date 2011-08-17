konami = new Konami()
konami.code = function() {
  $("div#pic").fadeIn("slow");
}
konami.load()
    
$(document).ready(function() {
    $("div#pic").click(function () { 
        $(this).fadeOut(); 
    });
});