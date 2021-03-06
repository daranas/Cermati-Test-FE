$( document ).ready(function() {
  // notif
  var notifBar = $('.notification');
  var notifBtn =$('#getNotif');
  var sectionHero = $('.hero');
  notifBtn.on('click', function() {
    notifBar.slideUp(120);
    sectionHero.css('padding-top', 0);
  });

  // newsletter
  var newsletter = $('.newsletter');
  var closeNewsletter = $('.newsletter__close');
  $(window).scroll(function() {
    if ($(window).scrollTop()  > $(window).height() / 3) {        
      newsletter.slideDown(450);
    }
  });

  closeNewsletter.on('click', function() {
    newsletter.slideUp(450);
  });

  // preloader
  $(window).on('load', function() {
    $('.preloader-wrapper').fadeOut();
  });
});