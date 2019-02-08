(function($) {

      // Open mobile menu
      $('#mobile-menu-open').click(function() {
            $('header, body').removeClass('active');
      });

      // Close mobile menu
      $('#mobile-menu-close').click(function(e) {
            e.preventDefault();
            $(this).fadeOut(200, function() {
                  $('#more-projects').fadeIn(200);
            });
      });
})
