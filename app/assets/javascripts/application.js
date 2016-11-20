// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require bootstrap-sprockets

$(document).ready(function(){
 /* Variables */
 i=0;//The counter to fade in transeffect items in order.
 inMotion = false;


 $(window).resize(function(){ 
    if(window.innerHeight < window.innerWidth){
      $('.eric_navItems').css({'display':'block'});
    } else {
      $('.eric_navItems').css({'display':'none'});
    }
  });

  var hamburgerToggle = true;
  $('.eric_hamburger').on('click',function(){
    if(hamburgerToggle){
      $('.eric_navItems').slideDown();
      hamburgerToggle = false;
    } else {
      $('.eric_navItems').slideUp();
      hamburgerToggle = true;
    }
  });


});
