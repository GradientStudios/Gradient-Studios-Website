$(document).ready(function() {
  
  var textBlock = '';
  $('span.text,div#companyBio span').each(function() {
    textBlock = $(this).html().replace(/ ([^\-\s]+)$/,'&nbsp;$1');
    alert(textBlock);
    $(this).html(textBlock);
  });
  
});
