$( document ).ready(function() { 

    /* Lignes de code à répéter en fonction du nombre de groupes que vous avez. */
    $('.groupe1').text($('#legend a[href*=g6]').text());
    $('.groupe1').css('color', $('#legend a[href*=g6]').css('color'));
    $('.groupe1').attr('href', $('#legend a[href*=g6]').attr('href'));
    $('.groupe2').text($('#legend a[href*=g7]').text());
    $('.groupe2').css('color', $('#legend a[href*=g7]').css('color'));
    $('.groupe2').attr('href', $('#legend a[href*=g7]').attr('href'));
    $('.groupe3').text($('#legend a[href*=g8]').text());
    $('.groupe3').css('color', $('#legend a[href*=g8]').css('color'));
    $('.groupe3').attr('href', $('#legend a[href*=g8]').attr('href'));
    $('.groupe4').text($('#legend a[href*=g9]').text());
    $('.groupe4').css('color', $('#legend a[href*=g9]').css('color'));
    $('.groupe4').attr('href', $('#legend a[href*=g9]').attr('href'));
    $('.groupe5').text($('#legend a[href*=g5]').text());
    $('.groupe5').css('color', $('#legend a[href*=g5]').css('color'));
    $('.groupe5').attr('href', $('#legend a[href*=g5]').attr('href'));
    $('.groupe6').text($('#legend a[href*=g12]').text());
    $('.groupe6').css('color', $('#legend a[href*=g12]').css('color'));
    $('.groupe6').attr('href', $('#legend a[href*=g12]').attr('href'));
});
