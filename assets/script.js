
  $(document).ready(function(){
    $('.parallax').parallax();
  });
// carousel
$(document).ready(function(){
  $('.carousel').carousel();
});
// reload page
function reloadPage()
{
location.reload();
}
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// function to fade in and fade out divs 
// ----------------------------------------------------Aly Help please lol--------------------------------
  // for(var i=0; i < 5; i++){
  //  var idname = '#fade' + i
  //  console.log(idname)
   
  // }
  // setTimeout(function(){
  //   $(idname).fadeIn(2000);  
  // }, 1000);
  
  // function fadeIns() {
    var i=2;
    var idname = '#fade' + i
    setInterval(
    pleaseWork(idname,i)
    ,500);   
// }
function pleaseWork(idname, i){
  $(idname).fadeIn(2000); 
  i++;
  console.log(i)
}
// fadeIns()
// -------------------------------------------------------------------------------
// $(document).ready(function() {
//   window.setTimeout("fadeMyDiv();", 1000); //call fade in 2 seconds for #fade
// }
// )

// function fadeMyDiv() { //fadeout #fade
//   $("#fade").fadeOut(1500);
// }

// setTimeout(function(){
//   $('#fade1').fadeIn(2000);  //fade in fade1
// }, 1000);



// function fadeMyDiv1() {
//   $("#fade1").fadeOut(1500);  //fade out fade1
// }

// $(document).ready(function() {
//   window.setTimeout("fadeMyDiv1();", 1000); 
// }
// )

// function fadeMyDiv2() {
//   $("#fade2").fadeOut(1500);  //fade out fade1
// }

// $(document).ready(function() {
//   window.setTimeout("fadeMyDiv2();", 3000); //call fade in 3 seconds
// }
// )


// setTimeout(function(){
//   $('#fade2').fadeIn(1000);    
// }, 3000);


// setTimeout(function(){
//   $('#fade3').fadeIn(2000);  
// }, 4000);

// $(document).ready(function() {
//   window.setTimeout("fadeMyDiv3();", 4000); //call fade in 3 seconds
// }
// )

// function fadeMyDiv3() {
//   $("#fade3").fadeOut(2000);  //fade out fade1
// }
// setTimeout(function(){
//   $('#fade4').fadeIn(3000);  
// }, 6000);

// setTimeout(function(){
//   $('#fade5').fadeIn(3000);  
// }, 7500);

// setTimeout(function(){
//   $('#fade6').fadeIn(3000);  
// }, 9000);

// setTimeout(function(){
//   $('#fade7').fadeIn(1500);  
// }, 11000);

// onclick transition   onclick to add class!
// $(function() {                      
//   $(".clickable").click(function() {  
//     $('#fade4').parent().addClass("hideme");     
//   });
// });


$(function() {                       
  $(".clickable").click(function() {  
    $('#fade4').parent().fadeOut(1500); 
     });
});

$(function(){
  $(".clickable").click(function(){
  $('#fade8').fadeIn(1000); 
 });
});


$('.trigger').click(function() {
  $('.slider').removeClass('close');
});


$('#mywork').click(function() {
  $('.slider').addClass('close');
});

$('#mywork').click(function() {
  $('.slider').removeClass('close');
  $('.newdiv').removeClass('hidemenow');
});

$('#aboutme').click(function() {
  $('.newdiv').addClass('hidemenow');
 
});



$(document).ready(function(){
  $(".trigger").click(function(){
     $(".add_here").removeClass("slider1");
  });
});

