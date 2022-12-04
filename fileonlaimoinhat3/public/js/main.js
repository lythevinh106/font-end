$(document).ready(function(){


    $('#header-slider').slick({

        dots:true,
        autoplay:true,
        speed:800,
        cssEase:"linear",
        arrows:true

    });





    $("#getting-started")
    .countdown("2022/06/05 22:00:00", function(event) {
    //   $(this).text(
    //     event.strftime('%D days - %H:%M:%S')
    //   );
    $(".h-time").text(
        event.strftime('%H')
      );
    $(".m-time").text(
        event.strftime('%M')
      );
      $(".s-time").text(
        event.strftime('%S')
      );
    
    });





    // slider-sale

    $('.slider-sale').slick({

      autoplay:true,
      speed:800,
      cssEase:"linear",
      slidesToShow: 5,
      arrows:true,
     

  });


  // back to top


  $(".back-to-top").show();
  $(window).scroll(function(){


    var pos_body = $('html,body').scrollTop();


    var pos_footer = $('.footer').position().top;
    pos_footer=pos_footer -400;
    // console.log( pos_body);
    // console.log( pos_footer);


    if(pos_body > pos_footer-500){

      $(".back-to-top").show();
      //alert("sadd");
    }
    

  });

  $(".back-to-top").click(function(){


  $("html,body").animate({
         scrollTop:  0,
  
  
  
  
       }, 1000);
    
    
    });






    //load item


  


   new WOW({
    boxClass: 'wow',
    animateClass: 'animated', // default
    offset: 100,          // default
    mobile: true,       // default
    live: true
}

).init();




//hien them san pham






///set width lop gia




})