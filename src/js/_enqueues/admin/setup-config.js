/**
 * @output wp-admin/js/setup-config.js
 */
/**
 * Setup config scripts
 *
 * @since 5.6.0
 *
 * @param {Object} document  The document object.
 * @param {Object} window    The window object.
 * @param {Object} navigator The navigator object.
 *
 * @return {void}
 */
( function ( document, window, navigator ) {
	document.addEventListener( 'DOMContentLoaded', function () {
		if ( ! /iPad|iPod|iPhone/.test( navigator.userAgent ) ) {
			var wpConfigTextArea = document.querySelector(
				'#wp-config.not-writable'
			);
			if ( wpConfigTextArea !== null ) {
				wpConfigTextArea.focus();
				wpConfigTextArea.select();
			}
		}

		var tryAgain = document.getElementById( 'try-again-link' );
		if ( tryAgain !== null ) {
			tryAgain.addEventListener( 'click', function ( event ) {
				window.history.go( -1 );
				event.preventDefault();
			} );
		}
	} );
} )( document, window, navigator );
