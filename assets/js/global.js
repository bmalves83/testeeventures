jQuery(document).ready(function () {
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();  
});

async function instanciarCarousel(seletor){
  jQuery(seletor).owlCarousel({
      loop: true,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      stopOnHover: false,
      autoplay: true,
      nav: false,
      dots: false,
      margin:0,
      stagePadding:30,
      smartSpeed:450,
      items: 1,
  })
}