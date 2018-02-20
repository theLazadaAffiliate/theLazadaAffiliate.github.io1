
// Typed.js
$(function(){
	$(".typed").typed({
		strings: ["content", "Youtube videos", "Makeup reviews", "Facebook Page"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 25,
		// time before typing starts
		startDelay: 500,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: false,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: "|",
	    autoInsertCss: true,
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});

// Calculator

$(document).ready(function($) {

$('.item-type').click(function() {
	$('.item-type').removeClass('item-type-active');
  $(this).addClass('item-type-active');
  });

function rangeCalc(i) {
var totalEarnings = 0;
var clickRange = [{begin:1, price:0}, {begin:4, price:0}, {begin:8, price:38}, {begin:12, price:57}, {begin:20, price:95}, {begin:28, price:133}, {begin:40, price:190}, {begin:52, price:247}, {begin:60, price:285}, {begin:72, price:342}, {begin:92, price:437}, {begin:120, price:570}, {begin:140, price:665}, {begin:160, price:760}, {begin:172, price:817}, {begin:180, price:855}, {begin:192, price:912}, {begin:200, price:950},];

clickRange.forEach(function(num, item) {
	if (clickRange[item].begin <= i) {
    totalEarnings = clickRange[item].price * 50;
    $('.clicks').text(i*25);
    $('.earnings').text("Php "+totalEarnings.toLocaleString()+" per month");
    }
  //console.log(tariff[item].begin);
});
}

$('.calc-range').on('input', function() {
	$('.links').text(this.value);
  rangeCalc(this.value);
});

//rangeCalc();

});
