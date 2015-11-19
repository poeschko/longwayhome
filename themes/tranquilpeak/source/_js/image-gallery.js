+function($) {
    'use strict';

    function createMasonry(element) {
        element.masonry({
            itemSelector: '.photo-box',
            columnWidth: '.image-gallery-grid-sizer',
            gutter: 10
        });
    }

    $(document).ready(function() {
        if ($('.image-gallery').length) {
            var galleries = $('.image-gallery-photos');
            galleries.each(function (index, gallery) {
                gallery = $(gallery);
                gallery.imagesLoaded(function () {
                    createMasonry(gallery);
                });
            });
            $(window).resize(function () {
                createMasonry(galleries);
            });
        }
    });
}(jQuery);