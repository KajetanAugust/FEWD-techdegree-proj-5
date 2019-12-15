$('input').show();

// DESKTOP SEARCH

$('.desktop-search').on('keyup',function() {
    const $searchVal = $('.desktop-search').val().toLowerCase();
    const $descriptions =$('a[data-caption]');
    $descriptions.each(function(i){
        const $attrDataCaption = $(this).attr('data-caption').toLowerCase().replace('<br>', '');
        if($attrDataCaption.includes($searchVal)){
            $(this).show();
        }else {
            $(this).hide()
        }
    });
});

// MOBILE SEARCH

$('.mobile-search-box').keyup(function() {
    const $searchVal = $('.mobile-search-box').val().toLowerCase();
    const $descriptions =$('a[data-caption]');
    $descriptions.each(function(i){
        const $attrDataCaption = $(this).attr('data-caption').toLowerCase().replace('<br>', '');
        if($attrDataCaption.includes($searchVal)){
            $(this).show();
        }else {
            $(this).hide()
        }
    });
});


