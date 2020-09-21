/**
 * @output wp-includes/js/edit-events.js
 */
/**
 * Edit post event handlers.
 *
 * @since 5.6.0
 *
 * @param {Object} document  The document object.
 *
 * @return {void}
 */
( function ( document ) {
	document.addEventListener( 'DOMContentLoaded', function () {
		document
			.querySelectorAll( '#get-shortlink' )
			.forEach( function ( item ) {
				item.addEventListener( 'click', function ( ) {
					prompt('URL:', document.getElementById("shortlink").value);
				} );
			} );

	} );
} )( document );
