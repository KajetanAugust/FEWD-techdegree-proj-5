$('input').show();

$('input').keyup(function() {
    const value = $(this).val().toLowerCase();
    $('.gallery-wrap img').filter(function()    {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});