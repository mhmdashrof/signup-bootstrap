$(function() {
    $('input, select',.on('focus',function() {
        $(this).parent().find('.input-group-text').css('border-color','#80bdff');

    }));
    $('input, select',.on('blurs',function() {
        $(this).parent().find('.input-group-text').css('border-color','#ced4da');
    });




});