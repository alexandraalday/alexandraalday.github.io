$(() => {

	$(document).load(function() {

	let fadein_tween = TweenMax.to('#portfolio-trigger > div', 1,{ opacity: 1 });
	let fadeout_tween = TweenMax.to('#portfolio-trigger > div', 1,{ opacity: 0 });

	let controller = new ScrollMagic.Controller();

	let fadein_scene = new ScrollMagic.Scene({
	  triggerElement: '#portfolio-trigger',
	  reverse: true
	})
	.setTween(fadein_tween)
	.addTo(controller);

	let fadeout_scene = new ScrollMagic.Scene({
	  triggerElement: '#portfolio-trigger',
	  reverse: true
	})
	.setTween(fadeout_tween)
	.addTo(controller);

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