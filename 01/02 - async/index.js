/* CHALLENGE 1 */

function sayHowdy() {
	console.log("Howdy");
}

function testMe() {
	setTimeout(sayHowdy, 0);
	console.log("Partnah");
}
// After thinking it through, uncomment the following line to check your guess!
// testMe(); // what order should these log out? Howdy or Partnah first?
//  Partnah
//  Howdy

/* CHALLENGE 2 */

function delayedGreet() {
	setTimeout(() => {
		console.log("Welome");
	}, 3000);
}
// Uncomment the following line to check your work!
delayedGreet(); // should log (after 3 seconds): welcome

/* CHALLENGE 3 */

function helloGoodbye() {
	setTimeout(() => {
		console.log("goodbye");
	}, 2000);
	console.log("Hello");
}
// Uncomment the following line to check your work!
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye

/* CHALLENGE 4 */

function brokenRecord() {
	// ADD CODE HERE
	setInterval(() => {
		console.log("hi Again");
	}, 1000);
}
// Uncomment the following line to check your work!
brokenRecord(); // should log (every second): hi again

/* CHALLENGE 5 */

function limitedRepeat() {
	// ADD CODE HERE
	var i = 0;
	var interval = setInterval(() => {
		i++;
		console.log("hi again Now");
		if (i > 4) clearInterval(interval);
	}, 1000);
}
// Uncomment the following line to check your work!
limitedRepeat(); // should log (every second, for 5 seconds): hi for now

/* CHALLENGE 6 */

function everyXsecsForYsecs(func, numbInterval, duration) {
	// ADD CODE HERE
	var i = 1;
	var repeat = setInterval(() => {
		i++;
		func();
		if (i > duration) clearInterval(repeat);
	}, numbInterval);
}
// Uncomment the following lines to check your work!
function theEnd() {
	console.log("This is the end!");
}
everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
