$('input').show();

$('input').keyup(function() {
    const $searchVal = $('input').val().toLowerCase();
    
    console.log($searchVal);
    
});

// .attr('data-caption')

const $descriptions =$('a[data-caption]');
console.log($descriptions);
$descriptions.each(function(index,element){});
const $attrDataCaption = $descriptions.attr('data-caption');
console.log($attrDataCaption);
