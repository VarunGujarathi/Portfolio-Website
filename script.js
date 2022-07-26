// $(document).ready(function() {
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll > 20) {
//             $('.navbar').css("background", "rgb(248, 4, 53)");
//             $('.navbar .menu li a').css("background", "none");
//         } else {
//             $('.navbar').css("background", " none");
//         }
//     })
//     $('.menu-btn').click(function() {
//         $('.navbar .menu').toggleClass("active");
//         $('.menu-btn i').toggleClass("active");

//     });
// });
$(document).ready(function(){
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
})