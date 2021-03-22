


// === Slider Start

$('.home_slider').owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: false,
  responsive:{
      0:{
          items:1
      }
  }
})

// === Slider End

// === Menu Start 

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// === Menu End 











