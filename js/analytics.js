var account = '';
var hostname = window.location.host;
switch(hostname) {
  case 'www.gradient-studios.com':
    account = 'UA-20856190-1'; 
    break;
  case 'www.gradientstudios.com':
    account = 'UA-20856190-7'; 
    break;
  default: account = 'UA-20856190-1';
}

var _gaq = _gaq || [];
_gaq.push(['_setAccount', account]);
_gaq.push(['_setDomainName', '.' + hostname]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
