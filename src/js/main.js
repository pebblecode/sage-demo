(function () { 'use strict';

  var readyStateCheckInterval = setInterval(function() {
      if (document.readyState === "complete") {
          clearInterval(readyStateCheckInterval);
          init();
      }
  }, 10);


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



      document.getElementById('btn-1').onclick = function(event) {
        document.getElementById('wrap-1').style.display="none";
      }


      document.getElementById('btn-2').onclick = function(event) {
        document.getElementById('wrap-2').style.display="none";
      }


      document.getElementById('btn-3').onclick = function(event) {
        document.getElementById('wrap-3').style.display="none";
      }






      // document.querySelectorAll('[id^=btn-]').onclick = function(event) {
      //   var wrapNum = event.target.id.replace('btn', 'wrap');
      //   console.log('clicked');
      //   document.getElementById(wrapNum).style.display="none";
      // }

  }

   

}()); // end 'use strict'