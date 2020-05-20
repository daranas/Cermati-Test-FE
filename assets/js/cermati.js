$( document ).ready(function() {
  var notifBar = $('.notification');
  var sectionHero = $('.hero');
  $('#getNotif').on('click', function() {
    notifBar.slideUp(80);
    sectionHero.css('padding-top', 0);
  })
});