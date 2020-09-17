/**
 * @output wp-admin/js/image-editor-events.js
 */
/**
 * Image Editor event handlers.
 *
 * @since 5.6.0
 *
 * @param {Object} document  The document object.
 * @param {Object} window    The window object.
 *
 * @return {void}
 */
(function (document, window) {
    document.addEventListener('DOMContentLoaded', function () {
        jQuery("div.wp_attachment_holder").on("load", "imgedit-panel-content", function () {
            const item = document.querySelector(
                "img.image-preview"
            );
            item.addEventListener('load', function() {
                imageEdit.imgLoaded(item.dataset.postId);
            });
            
        });
        jQuery("div.wp_attachment_holder").on("click", ".imgedit-crop", function () {
            const item = document.querySelector(
                ".imgedit-crop"
            );
            imageEdit.handleCropToolClick(parseInt(item.dataset.postId),
                item.dataset.nonce, item);
        });

        jQuery("div.wp_attachment_holder").on("click", ".imgedit-rleft", function () {
            const item = document.querySelector(
                ".imgedit-rleft"
            );
            imageEdit.rotate(
                90,
                parseInt(item.dataset.postId),
                item.dataset.nonce,
                item);
        });

        jQuery("div.wp_attachment_holder").on("click", ".imgedit-rright", function () {
            const item = document.querySelector(
                ".imgedit-rright"
            );
            imageEdit.rotate(
                -90,
                parseInt(item.dataset.postId),
                item.dataset.nonce,
                item);
        });

        jQuery("div.wp_attachment_holder").on("click", ".imgedit-flipv", function () {
            const item = document.querySelector(
                ".imgedit-flipv"
            );
            imageEdit.flip(1, parseInt(item.dataset.postId),
                item.dataset.nonce,
                item);
        });

        jQuery("div.wp_attachment_holder").on("click", ".imgedit-fliph", function () {
            const item = document.querySelector(
                ".imgedit-fliph"
            );
            imageEdit.flip(2, parseInt(item.dataset.postId),
                item.dataset.nonce,
                item);
        });

        jQuery("div.wp_attachment_holder").on("click", ".imgedit-undo", function () {
            const item = document.querySelector(
                ".imgedit-undo"
            );
            imageEdit.undo(parseInt(item.dataset.postId),
                item.dataset.nonce,
                item);
        });

        jQuery("div.wp_attachment_holder").on("click", ".imgedit-redo", function () {
            const item = document.querySelector(
                ".imgedit-redo"
            );
            imageEdit.redo(parseInt(item.dataset.postId),
                item.dataset.nonce,
                item);
        });

        


        /*   const cancelAsyncUpload = document.getElementById(
               'cancel-async-upload'
           );
           if (cancelAsyncUpload !== null) {
               cancelAsyncUpload.addEventListener('click', function (event) {
                   try {
                       window.top.tb_remove();
                   } catch (e) { }
                   event.preventDefault();
               });
           }*/


    });
})(document, window);
