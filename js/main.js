$(window).on("load", function (argument){
    /*-------------- Preloader -----------*/
    $(".preloader").fadeOut("slow");
});
$(document).ready(function (){
    /*--------- Navbar Shkrink -------*/
    $(window).on("scroll",function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink");
        }
        else{
            $(".navbar").removeClass("navbar-shrink");
        }
    })
    /*-----Video Popup----------*/ 
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn").on("click", function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src") == ''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });
    /*----------- Features Carousel ------*/
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
        
            }
        }
    });

    /*----------- Screenshots Carousel ------*/
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:4,
        
            }
        }
    });

    /*----------- Testimonials Carousel ------*/
    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
        
            }
        }
    });

    /*----------- Testimonials Carousel ------*/
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
        
            }
        }
    });

    /*----------- Page Scrolling - Scrollit ------*/
   $.scrollIt({
      topOffset: -50 
   });
   
   /*------------  Send data ------------*/
   $("#sendEmail").on("click", function(){
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#tel').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    $.post('https://us-central1-donexp.cloudfunctions.net/function-email',   // url
       { name: name, email: email, phone: phone, subject: subject, message: message }, // data to be submit
       function(data, status, jqXHR) {// success callback
                //alert("status "+status +data);
                if(status == 'error'){
                    alert("Erro tente novamente");
                }
                else{
                    //console.log(JSON.stringify(jqXHR));
                    location.reload(true);
                }
        })
    });

   /*----------- Navbar Collapse ------*/
   $(".nav-link").on("click", function(){
       $(".navbar-collapse").collapse("hide");
   });

   /*----------- Toggle Theme Light & Dark Mode------*/
   function toggleTheme(){
       if(localStorage.getItem("shala-theme") !== null){
           if(localStorage.getItem("shala-theme") == "dark"){
            $("body").addClass("dark");
           }
           else{
            $("body").removeClass("dark");
           }
       }
       updateIcon();
   }
   toggleTheme();
   $(".toggle-theme").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme","dark");
        }
        else{
            localStorage.setItem("shala-theme","light");
        }
        updateIcon();
   });
   function updateIcon(){
       if($("body").hasClass("dark")){
            $(".toggle-theme i").removeClass("fa-moon");
            $(".toggle-theme i").addClass("fa-sun");
       }
       else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
       }
   }
});
