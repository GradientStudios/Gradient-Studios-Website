// JavaScript Document

/**************************************************************************
  ******************           Carousel Area         ********************
***************************************************************************/
jQuery(document).ready(function () {
$('#carousel').elastislide({
imageW: 147,
onClick: null //important do not remove(will break colorbox)
});



/**************************************************************************
   ******************         Colorbox Area          ********************
***************************************************************************/
$('a.colorbox').colorbox({
rel: 'gal'
});




/**************************************************************************
  ******************           Tabbed Area          ********************
***************************************************************************/
$(document).ready(function() {

//When page loads...
$(".tab_content").hide(); //Hide all content
$("ul.tabs li:first").addClass("active").show(); //Activate first tab
$(".tab_content:first").show(); //Show first tab content

//On Click Event
$("ul.tabs li").click(function() {

$("ul.tabs li").removeClass("active"); //Remove any "active" class
$(this).addClass("active"); //Add "active" class to selected tab
$(".tab_content").hide(); //Hide all tab content

var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
$(activeTab).fadeIn(); //Fade in the active ID content
return false;
});

});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
