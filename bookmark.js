function bookmark() {
title = "Localhost bookmark";
// This function for Your website
url = "localhost:31337";
if (window.sidebar) {
// This function for Mozilla
window.sidebar.addPanel(title, url,"");
}
else if( window.external ) {
// This function for IE
window.external.AddFavorite( url, title);
}
else if(window.opera && window.print) {
// This function for Opera
return true; }
}
