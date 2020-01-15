// SEARCH

$('.search-bar').on('keyup',function() {
   
    const $searchVal = $('.search-bar').val().toLowerCase();  // The search input value is collected and transformed to lower case.
    
    const $descriptions =$('a[data-caption]'); // The data caption value is targetted
    
    $descriptions.each(function(i){ // Each function loops through all data caption attribute values
        const $attrDataCaption = $(this).attr('data-caption').toLowerCase().replace('<br>', '');
    //If function is checking if search value exist inside any of data caption attributes 
    //Data caption attribute values are transformed to lower case and the <br> tag is removed
    //It hides this photos which are not matched.
        if($attrDataCaption.includes($searchVal)){
            $(this).show();
        }else {
            $(this).hide();
        }
    });
});

