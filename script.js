$(document).ready(function(){
    $(window).scroll(function(){
        //tb sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        //tb scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //tb slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        //tb removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        //tb applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    //tb toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //tb typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Web Designer", " Web Developer", "Graphic Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Designer", " Web Developer", "Graphic Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //tb owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


//tb Skill Bars Script
    $('.skill-per').each(function(){
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width",per+'%');
        $({animatedValue: 0}).animate({animatedValue: per},{
          duration: 1000,
          step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          },
          complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
          }
        });
      });

      // MIXITUP

    var mixer = mixitup('.work-grid');


});