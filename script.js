// Author: Darian Hughes
// Date: 5/13/2024
// Assignment: Final Project - Online File
// script.js

//Navbar
$('#menuClick').on('change', function() {
    if ($('#menuClick').is(':checked')) {
        $('.menuContainer').css('left', '50%');
        $('.menuContainer').css('box-shadow', '20px 0 125px #000');
        $('#header').css('filter', 'blur(15px)', 'filter', 'brightness(50%)');
    } else {
        $('.menuContainer').css('left', '100%');
        $('.menuContainer').css('box-shadow', '0px 0 0px #000');
        $('#header').css('filter', 'blur(0px)', 'filter', 'brightness(100%)');
    }
});

//Main page animation
$(document).on('mousemove', e => {
    $('#bubble:nth-child(1)').css({
        top: (50 + e.pageY/300 + '%'),
        left: (50 + (e.pageX)/300 + '%')
    })

    $('#bubble:nth-child(2)').css({
        top: (40 + e.pageY/150 + '%'),
        left: (40 + (e.pageX)/175 + '%')
    })

    $('#bubble:nth-child(3)').css({
        top: (60 + e.pageY/450 + '%'),
        left: (60 - (e.pageX)/400 + '%')
    })

    $('#bubble:nth-child(4)').css({
        top: (40 - e.pageY/200 + '%'),
        left: (60 - (e.pageX)/350 + '%')
    })

    $('#bubble:nth-child(5)').css({
        top: (60 - e.pageY/300 + '%'),
        left: (40 + (e.pageX)/200 + '%')
    })

    $('#bubble:nth-child(6)').css({
        top: (40 - e.pageY/350 + '%'),
        left: (50 + (e.pageX)/450 + '%')
    })

    $('#bubble:nth-child(7)').css({
        top: (60 + e.pageY/350 + '%'),
        left: (50 + (e.pageX)/450 + '%')
    })

    $('#bigLetter').css({
        left: (80 - e.pageX/400 + '%')
    })
})