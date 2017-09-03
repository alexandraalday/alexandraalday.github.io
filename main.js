$(() => {

    $(document).ready(function(){
        $(document).scroll(function () {
            if ($(this).scrollTop() <= 815) {
                $('.navbar').css('background-color', 'transparent');
                $('.navbar').css('background', 'transparent');
                $('.navbar').css('border-color', 'transparent');
            } else {
                $('.navbar').css('background-color', 'rgba(61, 61, 142, 0.86)');
                $('.navbar').css('filter', 'brightness(80%)'); 
            }
        });
    });

});


