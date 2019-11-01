$(() => {
    $(document).ready(function(){
        const rightmeow = $('#heading').offset().top  + $('#heading').height() * 1.5;
        const backgroundColorScrollTop = 'transparent';
        const backgroundColor = 'rgba(61, 61, 142, 0.86)';

        $(document).scroll(function () {
            if ( $(document).scrollTop() <= rightmeow ) {
                $('.navbar').css('background-color', backgroundColorScrollTop);
                $('.navbar').css('background', backgroundColorScrollTop);
                $('.navbar').css('border-color', backgroundColorScrollTop);
            } else {
                $('.navbar').css('background-color', backgroundColor);
                $('.navbar').css('filter', 'brightness(80%)'); 
            }
        })
    });
});



