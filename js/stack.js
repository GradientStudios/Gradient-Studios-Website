$(document).ready(function() {
  
  var imgSize = 162;
  var rot = [-5,-2,0,2,5];
  var tran = [-334, -167, 0, 167, 334];
  var toggle = true;
  
  var kiterator = Math.floor(Math.random()*4);
  $("li").each(function() {
    var imgs = '<img src="http://placekitten.com/'+imgSize+'/'+imgSize+'?image='+kiterator+'" alt="">';
    for(var i=0; i < 4; i++) {
      imgs += '\n                <img src="http://placekitten.com/'+imgSize+'/'+imgSize+'?image='+(kiterator+i+1)+'" alt="">';
    }
    $(this).html(imgs);
    kiterator++;
  });
  
  $("li img").css('opacity', '0.6');

  $("li").each(function() {
    var z = 0;
    $(this).find("img").each(function() {
      $(this).css('z-index', z);
      $(this).css('rotate', rot[z]+'deg');
      z++;
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
    var z = 0;
    object.parent().find("img").each(function() {
      if(unfold) {
        $(this).css('z-index', "+=5");
        $(this).animate({opacity: '1.0', rotate: '0deg', translateX: tran[z]+'px'}, 500);
      } else {
        var dis = $(this);
        dis.animate({opacity: '0.6', rotate: rot[z]+'deg', translateX: '0px'}, 500, function(){dis.css('z-index', z)});
      }
      z++;
    });
  }

});