(function () { 'use strict';

  $(window).load(function() {
      // When the page has loaded
      // $("body").fadeIn(1500);
      
      $("#all-wrap").css('display', 'block');
      
      $('#intro-1').addClass('left-in-1');
      $('#intro-2').addClass('left-in-2');
      $('#intro-3').addClass('left-in-3');
      $('#intro-4').addClass('left-in-4');
      $('#intro-5').addClass('left-in-5');
      $('#btn-1').addClass('left-in-6');
      $("#all-wrap").css('opacity', '1');

      init();
    });


  function init() {
      // CLASSIE FUNCTION FOR TEXT INPUT FORMS
        if (!String.prototype.trim) {
          (function() {
            // Make sure we trim BOM and NBSP
            var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            String.prototype.trim = function() {
              return this.replace(rtrim, '');
            };
          })();
        }

        [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
          // in case the input is already filled..
          if( inputEl.value.trim() !== '' ) {
            classie.add( inputEl.parentNode, 'input--filled' );
          }

          // events:
          inputEl.addEventListener( 'focus', onInputFocus );
          inputEl.addEventListener( 'blur', onInputBlur );
        } );

        function onInputFocus( ev ) {
          classie.add( ev.target.parentNode, 'input--filled' );
        }

        function onInputBlur( ev ) {
          if( ev.target.value.trim() === '' ) {
            classie.remove( ev.target.parentNode, 'input--filled' );
          }
        }

      // END CLASSIE//


      $('[id^=btn-]').click( function(event) {
        var btnNum = event.target.id
        var wrapNum = event.target.id.replace('btn', 'wrap');
        // document.getElementById(wrapNum).style.display="none";
        if ( wrapNum == 'wrap-4') {
            location.reload();
        } else {
            //if doesn't have off class
            if ( $('#'+ btnNum).hasClass('btn-off') == false ) {
              console.log( $('#' + wrapNum ).hasClass('btn-off') );
                $('#'+wrapNum).animate({
                    left: '300%',
                    top: '-20%',
                    height: '+=50%',
                    width: '+=50%',
                    opacity: 0
                }, 500);
            }
        }
        
      })

      

      //Click form to autofil text
      var formCount = 0;


      $('#form-wrap').click( function() {
        if (formCount == 0) {
          $("#input-1").focus().delay(1000).queue(function() {
            showText("#input-1", "Stephen", 0, 150);  
          });
          
        }
      });




      var showText = function (target, message, index, interval) {    
        if (index < message.length) { 
          $(target).val(function(_, v) { return v + message[index++]; })
          setTimeout(function () { showText(target, message, index, interval); }, interval); 
        } else {
            formCount++;
            if (formCount == 1) {
              $("#input-2").focus().delay(1000).queue(function() {
                showText("#input-2", "Allott", 0, 40);  
              });
            } else if (formCount == 2) {
              $("#input-3").focus().delay(400).queue(function() {
                showText("#input-3", "stephen@pebblecode.com", 0, 20);  
              });
            } else if (formCount == 3) {
              $("#input-4").focus().delay(300).queue(function() {
                showText("#input-4", "07772 227 772", 0, 20);
                
              });
            } else if (formCount == 4) {
              $("#btn-2").focus()
              $("html, body").animate({ scrollTop: 0 }, 200);
              $('#btn-2').toggleClass('btn-off');  
            }
          }

      };
          

  }

   

}()); // end 'use strict'