/**
 * @output wp-includes/js/go-back.js
 */
/**
 * Setup config event handler
 *
 * @since 5.6.0
 *
 * @param {Object} document  The document object.
 * @param {Object} window    The window object.
 *
 * @return {void}
 */
( function ( document, window ) {
	document.addEventListener( 'DOMContentLoaded', function () {
		var tryAgain = document.getElementById( 'go-back' );
		if ( tryAgain !== null ) {
			tryAgain.addEventListener( 'click', function ( event ) {
				window.history.go( -1 );
				event.preventDefault();
			} );
		}
	} );
} )( document, window );
