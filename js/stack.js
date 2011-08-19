$(document).ready(function() {
  
  var imgSize = 162;
  var rot = [-5,-2,0,2,5];
  var tran = [-334, -167, 0, 167, 334];
  var toggle = true;
  
  var start = Math.floor(Math.random()*4);
  $("li").each(function(index) {
    var imgs = '';
    for(var i=0; i < 5; i++) {
      imgs += '\n                ';
      imgs += '<img src="http://placekitten.com/'+imgSize+'/'+imgSize+'?image='+(index+start+i+1)+'" alt="">';
    }
    imgs += '\n            ';
    $(this).html(imgs);
  });
  
  $("li img").css('opacity', '0.6');

  $("li").each(function() {
    $(this).find("img").each(function(index) {
      $(this).css('z-index', index);
      $(this).css('rotate', rot[index]+'deg');
    });
  });

  $("img").click(function() {
    if($(this).parent().hasClass('unfolded')) { 
      folder($(this),false);
      $(this).parent().toggleClass('unfolded');
    } else {
      $('.unfolded').each(function(){folder($(this).find("img:first"),false)});
      $('.unfolded').toggleClass('unfolded');
      folder($(this),true);
      $(this).parent().toggleClass('unfolded');
    }
  });

  function folder(object, unfold) {
    object.parent().find("img").each(function(index, element) {
      if(unfold) {
        $(this).css('z-index', "5");
        $(this).animate({opacity: '1.0', rotate: '0deg'}, 100, function() {
          $(element).animate({translateX: tran[index]+'px'},500);
        });
        
      } else {
        $(this).animate({opacity: '0.6', translateX: '0px'}, 500, function() {
          $(element).animate({rotate: rot[index]+'deg'},100);
          $(element).css('z-index', index);
        });
      }
    });
  }

});