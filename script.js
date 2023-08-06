const toggleButton = document.getElementById('toggle-button');
  const naviList = document.getElementById('navi-list');
  toggleButton.addEventListener('click', () =>{
      naviList.classList.toggle('active');
    })



    $(".slider").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        nav:true,

        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })
  
 