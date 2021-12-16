$(function($) {
 let url = document.location.href;
  $('nav ul li a').each(function() {
   if (this.href === url) {
   $(this).addClass('active');
  }
 });
  console.log(url)
});