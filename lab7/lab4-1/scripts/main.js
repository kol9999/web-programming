$(function($) {
 let url = document.location.href;
  $('nav ul li a').each(function() {
   if (this.href === url) {
   $(this).addClass('active');
  }
 });
  console.log(url)
});


$(document).ready(function() {
  //toastr calls the library and the info and success methods are called to show the modal window
    // show this when the page is loaded
    toastr.info('Page Loaded!');
    // with jquery I select the linkButton id and put an eventlistener for a click
    $('#linkButton').click(function() {
 toastr.success('Email is sent');
       // show this when the send button is clicked
    });

});


$( ".mailSubmit" ).click(function(event) {
  //Here I prevent the default behaviour of the form tag that reloads the page
  event.preventDefault();
  $( "<div>" )
    .append( "default " + event.type + " prevented" )
    .appendTo( "#log" );
});