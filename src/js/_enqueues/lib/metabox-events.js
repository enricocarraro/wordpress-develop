/**
 * @output wp-includes/js/metabox-events.js
 */
/**
 * Metabox related event handlers.
 *
 * @since 5.6.0
 *
 * @requires common
 * @requires edit-comments
 * @requires post
 *
 * @param {Object} document  The document object.
 * @param {Object} window  The window object.
 *
 * @return {void}
 */
( function ( document, window ) {
	document.addEventListener( 'DOMContentLoaded', function () {
		document
			.querySelectorAll( 'form.metabox-location' )
			.forEach( function ( item ) {
				item.addEventListener( 'submit', function ( event ) {
					event.preventDefault();
				} );
			} );

		document
			.querySelectorAll( '.permanent-deletion' )
			.forEach( function ( item ) {
				item.addEventListener( 'click', function ( event ) {
					if ( ! showNotice.warn() ) {
						event.preventDefault();
					}
				} );
			} );

		document
			.querySelectorAll( '#add-new-comment > button' )
			.forEach( function ( item ) {
				item.addEventListener( 'click', function () {
					if ( window.commentReply ) {
						commentReply.addcomment(
							parseInt( item.dataset.postId )
						);
					}
				} );
			} );

		document
			.querySelectorAll( '.open-comment-reply' )
			.forEach( function ( item ) {
				item.addEventListener( 'click', function () {
					if ( window.commentReply ) {
						commentReply.open(
							item.dataset.commentId,
							item.dataset.postId
						);
					}
				} );
			} );

		document
			.querySelectorAll( '#commentstatusdiv' )
			.forEach( function ( item ) {
				item.addEventListener( 'click', function ( event ) {
					commentsBox.load( item.dataset.total );
					event.preventDefault();
				} );
			} );
	} );
} )( document, window );
