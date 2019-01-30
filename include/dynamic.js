$(function() {
      var   newHash           = "",
            $mainContent      = $("#mainContent"),
            $pageWrap         = $("#pageWrap"),
            baseHeight        = 0,
            $el;

      $pageWrap.height($pageWrap.height());
      baseHeight = $pageWrap.height() - $mainContent.height();

      //ON CLICK
      $("nav").delegate("a", "click", function() {
            window.location.hash = $(this).attr("href");
            return false;
      });

      //ON ENTER - intended for when query is entered in command main
      $(document.body).delagate('input:text', 'keypress', function(e) {
            if (e.which === 13) { // if is enter
                  e.preventDefault(); // don't submit form

                  if ()
            }
      })

      $(window).bind('hashchange', function() {

            newHash = window.location.hash.substring(1);

            if(newHash) {
                  $mainContent
                        .find("#") //?
                        .fadeOut(200, function() {
                              $mainContent.hide().load(newHash + "#", function() {
                                    $mainContent.fadeIn(100, function() {
                                          $pageWrap.animate({
                                                height: baseHeight + $mainContent.height() + "px"
                                          });
                                    });
                                    $("nav a").removeClass("current");
                                    $("nav a[href='"+newHash+"']").addClass("current");
                              });
                        });
            };
      });

      function(respText, textStatus, ajax) {
            if (ajax.status < 200 || ajax.status > 304) {
                  var errorMsg      = $('<div>'+
                                          '<h3>Error '+( ajax.status )+' - '+( ajax.statusText )+'</h3>'+
                                          '<div>'+
                                            'An error occured whilst trying to access "'+newHash+'".<br>'+
                                            'Return to <a href="#'+$( 'nav li:eq(0) a' ).attr( 'href' )+'">Home</a> or '+
                                            '<a href="#" onclick="history.go(-1);">Go back</a>'+
                                          '</div>' +
                                        '</div>' );
                  $(errorMsg).appentTo($mainContent);
            }
      }

      $(window).trigger('hashchange');
})
