/**
 * @output wp-includes/js/edit-post-events.js
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
			.querySelectorAll( '.metabox-location' )
			.forEach( function ( item ) {
				item.addEventListener( 'submit', function ( event ) {
					event.preventDefault();
				} );
			} );

	} );
} )( document );
