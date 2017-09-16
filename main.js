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
                let windowBottom = $(this).scrollTop() + $(this).innerHeight();
                $("#projects").each(function() {
                /* Check the location of each desired element */
                let objectBottom = $(this).offset().top + $(this).outerHeight();      
                /* If the element is completely within bounds of the window, fade it in */
                if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                    if ($(this).css("opacity")==0) {$(this).fadeTo(1000,1);}
                } else { //object goes out of view (scrolling up)
                    if ($(this).css("opacity")==1) {$(this).fadeTo(1000,0);}
                }
            });
            }
        })
        });




});



