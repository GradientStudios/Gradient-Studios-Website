$(document).ready(function() {
  
  var imgSize = 162; // size of image files (must be square, imgSize is the lenght and width)
  var rot = [-5,-2,0,2,5]; // rotation angles in degrees for picture piles
  var tran = [-334, -167, 0, 167, 334]; // translations in pixels for picture spreads
  
  // fill the lists with kittens
  var start = Math.ceil(Math.random()*4); // randomize starting kitten (1-4)
  $("li").each(function(index) { // iterate through each list item (0-8)
    var imgs = '';
    for(var i=0; i < 5; i++) { // there will be 5 images to each list item (0-4)
      imgs += '\n                ';
      imgs += '<img src="http://placekitten.com/'+imgSize+'/'+imgSize+'?image='+(index+i+start)+'" alt="">';
      // 4+8+4 = 16 possible kittens
    }
    imgs += '\n            ';
    $(this).html(imgs); // fill 5 kittens into the current list item
  });
  
  $("li img").css('opacity', '0.6'); // images will have reduced opacity in folded state

  // layer the images and rotate them into their initial positions
  $("li").each(function() {
    $(this).find("img").each(function(index) {
      $(this).css('z-index', index);
      $(this).css('rotate', rot[index]+'deg');
    });
  });

  $("img").click(function() {
    if($(this).parent().hasClass('unfolded')) { 
      
      folder($(this),false);
      $(this).parent().animate({backgroundColor: "rgba(35,31,32,0.6)", borderBottomColor: "white", top: 0, left: 0}, 500);
      $(this).parent().toggleClass('unfolded');
      
    } else {
      
      var offset = $(this).parent().offset();
      var topOffset = ((($(window).height() - $(this).parent().outerHeight()) / 2) + $(window).scrollTop())-offset.top;
      var leftOffset = ((($(window).width() - $(this).parent().outerWidth()) / 2) + $(window).scrollLeft())-offset.left;
      $(this).parent().animate({backgroundColor: "rgba(0,0,0,0)", borderBottomColor: "rgba(0,0,0,0)", top: topOffset, left: leftOffset}, 500);
      
      folder($(this),true);
      $(this).parent().toggleClass('unfolded');
      
    }
  });
  
  $("#overlay").click(function(){
    $('.unfolded').each(function(){
      folder($(this).find("img:first"),false);
      $(this).animate({backgroundColor: "rgba(35,31,32,0.6)", borderBottomColor: "white", top: 0, left: 0}, 500);
    });
    $('.unfolded').toggleClass('unfolded');
  });

  function folder(object, unfold) {
    if(unfold) {
      $("#overlay").fadeIn(200,function(){
        folderHelper(object, unfold);
      });
    } else {
      $("#overlay").fadeOut(200,function(){
        folderHelper(object, unfold);
      });
    }
  }
  
  function folderHelper(object, unfold) {
    object.parent().find("img").each(function(index, element) {
      if(unfold) {
        $(this).css('z-index', "10");
        $(this).animate({opacity: '1.0', rotate: '0deg'}, 200, function() {
          $(element).animate({translateX: tran[index]+'px'},500);
        });
        
      } else {
        $(this).animate({opacity: '0.6', translateX: '0px'}, 500, function() {
          $(element).animate({rotate: rot[index]+'deg'},200);
          $(element).css('z-index', index);
        });
      }
    });
  }

});
