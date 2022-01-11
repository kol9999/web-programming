
$(document).ready(function() {
  //toastr calls the library and the info and success methods are called to 
  //show the modal window
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

//     $("#video_themes_custom").change(() => {
//   let themes = ["city", "fantasy", "forest", "sea"];
//   let holder = $("#video_themes_custom").val();
//   console.log(holder);
//   // for(let i = 0; i < themes.length; i++){
//     $("video").toggleClass(`vjs-theme-${holder}`)
//   // }
// })
