

$(window).on("load",function(){

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
		autoplay:true,
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
		autoplay:true,
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
  
	//typed.js 
	$(function(){
		$("#typed").typed({
			stringsElement: $('#typed-strings'),
	        typeSpeed: 80      
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