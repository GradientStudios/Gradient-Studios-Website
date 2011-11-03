$(document).ready(function() {
  
  var imgSize = 162; // size of image files (must be square, imgSize is the lenght and width)
  var rot = [-5,-2,0,2,5]; // rotation angles in degrees for picture piles
  var tran = [-334, -167, 0, 167, 334]; // translations in pixels for picture spreads
  
  var gradientAvatar = 'images/logo3Dx'+imgSize+'.png';
  
  var andrewGravatar = 'http://0.gravatar.com/avatar/a719fea78d0d7ce80ccb6dc5a527febe?s='+imgSize+'&d=identicon&r=G';
  var makGravatar = 'http://1.gravatar.com/avatar/16835ccf63c05eea442ba1bb3e75dddc?s='+imgSize+'&d=identicon&r=G';
  var zGravatar = 'http://1.gravatar.com/avatar/32e13d53c889e901202e8ec1b5b7ff28?s='+imgSize+'&d=identicon&r=G';
  var trevorGravatar = 'http://1.gravatar.com/avatar/7cc7e1765d3e1292198992c5afc32f56?s='+imgSize+'&d=identicon&r=G';
  var ericGravatar = 'http://0.gravatar.com/avatar/4ab4b320906a7e110283778ef4cfb2ba?s='+imgSize+'&d=identicon&r=G';
  
  var gravatars = [andrewGravatar, makGravatar, zGravatar, trevorGravatar, ericGravatar];
  
  var gradientBio = 'An image gradient is a smooth transition from one color to another, a blending. As an interdisciplinary studio, we bring together the training from various backgrounds and smoothly blend it together into new and engaging forms of interactive media.';
  
  var andrewBio = '<span class="name">Andrew Dolice</span> graduated from <abbr title="Rensselaer Polytechnic Institute">RPI</abbr> with a <abbr title="Bachelor of Science">BS</abbr> in <abbr title="Games, Simulations, Arts and Sciences">GSAS</abbr> and Computer Science, and an <abbr title="Master of Science">MS</abbr> in Computer Science with a concentration in Computer Graphics. Andrew makes the code flow.';
  var makBio = '<span class="name">Maxim "Mak" Mendelson</span> graduated from <abbr title="Rensselaer Polytechnic Institute">RPI</abbr> with a <abbr title="Bachelor of Science">BS</abbr> in <abbr title="Games, Simulations, Arts and Sciences">GSAS</abbr>. Mak wields the Wacom with impunity and creates all the beauty in our worlds. From 2D to 3D to 4D, Mak is our digital visual wizard.';
  var zBio = '<span class="name">Michael "Z" Goddard</span> graduated from <abbr title="Rensselaer Polytechnic Institute">RPI</abbr> with a <abbr title="Bachelor of Science">BS</abbr> in <abbr title="Games, Simulations, Arts and Sciences">GSAS</abbr> and Computer Science. Z is our lead programmer who dabbles in esolangs and makes JavaScript do things you probably didn\'t think it could.';
  var trevorBio = '<span class="name">Trevor Sayre</span> graduated from <abbr title="Rensselaer Polytechnic Institute">RPI</abbr> with a <abbr title="Bachelor of Science">BS</abbr> in <abbr title="Electronic Media, Arts and Communications">EMAC</abbr> and Computer Science, and an <abbr title="Master of Science">MS</abbr> in <abbr title="Human-Computer Interaction">HCI</abbr> with a concentration in Interaction Design. Trevor manages the business and tries to make the users happy through better design.';
  var ericBio = '<span class="name">Eric Li</span> graduated from <abbr title="Rensselaer Polytechnic Institute">RPI</abbr> with a <abbr title="Bachelor of Science">BS</abbr> in <abbr title="Games, Simulations, Arts and Sciences">GSAS</abbr> and Computer Science, and an <abbr title="Master of Science">MS</abbr> in Computer Science with a concentration in Computer Graphics. Eric is our resident self-descirbed code monkey.';
  
  var bios = [andrewBio, makBio, zBio, trevorBio, ericBio]
  
  var randIndex = Math.ceil(Math.random()*5);
  $("li").each(function(index) {
    if(index == 0) {
      var html = '<img src="'+gradientAvatar+'" alt="">\n';
      html += '<div>'+gradientBio+'</div>\n';
      $(this).html(html);
    }
    else {
      if (randIndex >= gravatars.length) randIndex = 0;
      var html = '<img src="'+gravatars[randIndex]+'" alt="">\n';
      $(this).html(html);
      randIndex += 1;
    }
  });
  
  $("li img").css('opacity', '0.6');
  $("li img").hover(
    function () {
      $(this).animate({opacity: '1.0'}, 200);
    }, 
    function () {
      $(this).animate({opacity: '0.6'}, 200);
    }
  );

  $("img").click(function() {
    if($(this).parent().hasClass('unfolded')) {
      
      folder($(this),false);
      $(this).parent().animate({backgroundColor: "rgba(80,80,80,1.0)", borderBottomColor: "white", top: 0, left: 0}, 500);
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
      $(this).animate({backgroundColor: "rgba(80,80,80,1.0)", borderBottomColor: "white", top: 0, left: 0}, 500);
    });
    $('.unfolded').toggleClass('unfolded');
  });

  function folder(object, unfold) {
    if(unfold) {
      
      $(object).unbind('mouseenter mouseleave');
      
      $("#overlay").fadeIn(200,function(){
        folderHelper(object, unfold);
      });
      
    } else {
      
      $("#overlay").fadeOut(200,function(){
        folderHelper(object, unfold);
      });
      
      $(object).hover(
        function () {
          $(object).animate({opacity: '1.0'}, 200);
        }, 
        function () {
          $(object).animate({opacity: '0.6'}, 200);
        }
      );
      
    }
  }
  
  function folderHelper(object, unfold) {
    object.parent().find("img").each(function(index, element) {
      if(unfold) {
        $(this).css('z-index', "10");
        $(this).animate({opacity: '1.0'}, 200, function() {
                 $(element).animate({translateX: tran[index]+'px'},500);
               });
        
      } else {
        $(this).animate({opacity: '0.6', translateX: '0px'}, 500, function() {
          $(element).css('z-index', index);
        });
      }
    });
  }

});
