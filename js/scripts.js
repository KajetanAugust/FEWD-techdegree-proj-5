$('input').show();



$('input').keyup(function() {
    const $search = $('input').val().toLowerCase();
    if($search !== $('div a.attr(data-caption)').toLowerCase())  {
        $(this).hide();
    }

});