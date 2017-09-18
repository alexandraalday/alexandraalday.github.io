$(window).on("load",function(){

    ////////////////////
    // ABOUT ME STUFF //
    ////////////////////

    let scrollMagicController = new ScrollMagic.Controller();
    let aboutmeTween = TweenMax.staggerFromTo('#about-me .item', 0.5,
        {
            y: 50,
            x: -50,
            opacity: 0
        },
        {
            y: 0,
            x: 0,
            opacity: 1
        },
        0.2
    );
    let aboutmeScene = new ScrollMagic.Scene({
        triggerElement: '#about-me .item',
        duration: 500,
        offset: -200
    })
    .setTween(aboutmeTween)
    .addTo(scrollMagicController);

    /////////////////////
    // PORTFOLIO STUFF //
    /////////////////////

    let portfolioTween = TweenMax.fromTo('#portfolio h1, #portfolio hr', 0.5,
        {
            y: -100
        },
        {
            y: -30
        }
    );
    let portfolioScene = new ScrollMagic.Scene({
        triggerElement: '#portfolio',
        duration: 700,
        offset: 50
    })
    .setTween(portfolioTween)
    .addTo(scrollMagicController);
    let portfolioTextTween = TweenMax.fromTo('#portfolio-items', 0.5,
        {
            y: 0,
        },
        {
            y: -25
        }
    );
    let portfolioTextScene = new ScrollMagic.Scene({
        triggerElement: '#portfolio',
        duration: 500,
        offset: 50
    })
    .setTween(portfolioTextTween)
    .addTo(scrollMagicController);


    //////////////////////
    // PORTFOLIO SLIDER //
    //////////////////////

	$(function() {


	$('.slider-portfolio-pic').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        fade: true,
        asNavFor: '.slider-portfolio-nav'
	});


	$('.slider-portfolio-content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
		asNavFor: '.slider-portfolio-pic',       
        slide: 'div',
		autoplay:false,
		arrows: false
	});


	$('.slider-portfolio-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        asNavFor: '.slider-portfolio-content,.slider-portfolio-pic',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        slide: 'div',
		autoplay:false,
      responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '40px',
	        slidesToShow: 2
	      }
	    }]
	});    
  
	//////////////////
    // TYPED TEXT   //
    //////////////////
    
	$(function() {
	  $(".typedtext").typed({
	    strings: [" Developer", " Designer", " Creative"],
	    typeSpeed: 80,
	    backSpeed: 10,
	    backDelay: 2000,
	    showCursor: false,
	    loop: false
	  });
	});

});

});



// Open the console...
console.log("                             .");
console.log("                           _,|\\ ");
console.log("                           \\__/ ");
console.log("                            || ");
console.log("         ___               {_].");
console.log("          \\ \\               L; ` ");
console.log("           ) )               | :  ,(),_,_,(), ");
console.log("         _/_/                | | / /(,,^,,)\\ \\ ");
console.log("                             | || | ;`-o-'; | | ");
console.log("                             |/:) | | '.' | | ( ");
console.log("                              \\ \\(   \\_-_/   ) | ");
console.log("                               \\ `._--)=(---.: | ");
console.log("                               |\\ '-_|\\O/|_-'/\\ ");
console.log("                              | | `\\ |/ \\| //\\ \\ ");
console.log("                              / /   \\     /   \\ \\ ");
console.log("                             ; |    :\\   /:    \\/\\ ");
console.log("                             | (   / \\\\,// \\   )\\ \\ ");
console.log("                             | |  /  /|'|\\  \\  | \\ \\ ");
console.log("                             | | /  / | | \\  \\ | |\\ \\___ ");
console.log("                             ) :'-_/--|_|--\\_-`: ( `-\\ ");
console.log("                            / /  /    / \\    \\   \\ \\ ");
console.log("                           / /  /    /   \\    \\   \\ \\ ");
console.log("                      /\\_/ /   /    /     \\    \\   \\ \\_/\\ ");
console.log("                      \\___'   /    /       \\   \\    `___/ ");
console.log("                              /   /         \\   \\ ");
console.log("                             /   /           \\   \\ ");
console.log("                            /   /             \\   \\ ");
console.log("                            /^/                 \\^\\ ");
console.log("                           /  /                 \\  \\ ");
console.log("                          /  /                   \\  \\ ");
console.log("                         /  /                     \\  \\ ");
console.log("                        ' ,/                       \\, ` ");
console.log("                       ; /                           \\ : ");
console.log("                      /  /J                         L\\  \\ ");
console.log("                     :__/'                           '\\__; ");
console.log("Moon prism power!")