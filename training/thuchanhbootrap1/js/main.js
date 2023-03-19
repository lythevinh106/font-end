
$(document).ready(() => {


    var posHeaderHeight = $(".header__top").outerHeight();


    $(window).scroll((e) => {
        let pos_body = $("html,body").scrollTop()

        console.log(pos_body);
        if (pos_body >= posHeaderHeight - 20) {
            $(".header__top").addClass("sticky animate__animated animate__zoomIn");
        } else {


            $(".header__top").removeClass("sticky animate__animated animate__zoomIn");

        }






    })

})