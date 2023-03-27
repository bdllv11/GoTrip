// Caurousel

const owl = $(".owl-carousel");
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 0,
    items: 1,

    responsive : {

      640 : {
        items: 3,
        startPosition: 1,
      },

      850 : {
        items: 3,
        startPosition: 1,
      },

      1200 : {
        items: 3,
        margin: 30,
      }
  }
  });

  // Go to the previous item
$(".slider__btn--prev").click(function () {
    // With optional speed parameter
    owl.trigger("prev.owl.carousel");
  });
  
// Go to the next item
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// nav icon

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function () {
  nav.classList.toggle('nav--mobile');
  menuIcon.classList.toggle('menu-icon--active');
};
