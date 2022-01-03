// section controlling appearing navbar sticky and button to scroll
$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
    }else{
        $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 200){
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function(){
      $('html').animate({scrollTop: 0});
      // removing smooth scroll on slide-up button click quicker moving
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Mechanicians", "Electricians", "Coders"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Students", "Engineers", "Visioners"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });
});
