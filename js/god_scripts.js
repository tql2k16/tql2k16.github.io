$(document).ready(function(){
      $(".button-collapse").sideNav();
      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
        onOpen: function(el) { },
        onClose: function(el) {}}
        )

      $('.scrollspy').scrollSpy(
        {
          scrollOffset:250,
          activeClass: 'active',
          getActiveElement: asdasd
        }
      );

      var scroll_fire_options = [
         {selector: '.row', offset: 150, callback: customCallbackFunc },
         {selector: '#kontakt', offset: 50, callback: function(el) {
           console.log($(el));
         } }
       ];

    Materialize.scrollFire(scroll_fire_options);

    $('.tooltipped').tooltip({delay: 50});


});

customCallbackFunc = function(what) {

  console.log($(what));
}


asdasd = function(id) {
  var menuitems = $(".nav-wrapper ul li");
  for (var i = 0; i <menuitems.length; i++) {
    if($(menuitems[i]).find("a").attr("href") == "#"+id) {
      $(menuitems[i]).addClass("active");
    } else {
      $(menuitems[i]).removeClass("active");
    }
  }

};

$("#baudie").click(function(asd){
  if(  $(asd.target).attr("src") == "img/bau_dich.jpg") {

    $(asd.target).parent().animateCss("flipInY", function() {

    });
    $(asd.target).attr("src", "img/ich_yo.jpg");

  } else {

    $(asd.target).parent().animateCss("flip", function() {

    });

    $(asd.target).attr("src","img/bau_dich.jpg");
  }



});

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
              callback();
            }
        });
        return this;
    }
});
