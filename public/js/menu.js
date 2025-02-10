$(document).ready(function () {
    $('.second-menu-item').hover(function () {
        var selector = "#" + $(this).data('id');

        $('.nav-drop-block').each(function () {
            $(this).removeClass('show')
        })

        $(selector).addClass('show');
    })
});
