
  $(document).ready(function(){
    $('.parallax').parallax();
  });


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

$(document).ready(function(){
  $('.carousel').carousel();
});

// function to fade in and fade out divs 
$(document).ready(function() {
  window.setTimeout("fadeMyDiv();", 2000); //call fade in 2 seconds for #fade
}
)

function fadeMyDiv() { //fadeout #fade
  $("#fade").fadeOut(2000);
}

setTimeout(function(){
  $('#fade1').fadeIn(3000);  //fade in fade1
}, 3500);

// $(document).ready(function() {
//   window.setTimeout("fadeMyDiv1();", 2000); //call fade in 2 seconds for #fade1
// }
// )


function fadeMyDiv1() {
  $("#fade1").fadeOut(2000);  //fade out fade1
}

setTimeout(function(){
  $('#fade2').fadeIn(3000);  
}, 8000);

$(document).ready(function() {
  window.setTimeout("fadeMyDiv2();", 11000); //call fade in 3 seconds
}
)

function fadeMyDiv2() {
  $("#fade2").fadeOut(2000);  //fade out fade1
}



$(document).ready(function() {
  window.setTimeout("fadeMyDiv1();", 6000); 
}
)

setTimeout(function(){
  $('#fade3').fadeIn(3000);  
}, 12500);

$(document).ready(function() {
  window.setTimeout("fadeMyDiv3();", 15000); //call fade in 3 seconds
}
)

function fadeMyDiv3() {
  $("#fade3").fadeOut(2000);  //fade out fade1
}
setTimeout(function(){
  $('#fade4').fadeIn(3000);  
}, 17000);