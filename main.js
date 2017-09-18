$(() => {

    $(document).ready(function(){
        let rightmeow = $('#heading').offset().top  + $('#heading').height()
        console.log(rightmeow);
        $(document).scroll(function () {
            if ( $(document).scrollTop() <= rightmeow ) {
                $('.navbar').css('background-color', 'transparent');
                $('.navbar').css('background', 'transparent');
                $('.navbar').css('border-color', 'transparent');
            } else {
                $('.navbar').css('background-color', 'rgba(61, 61, 142, 0.86)');
                $('.navbar').css('filter', 'brightness(80%)'); 
            }
        })
    });

});



