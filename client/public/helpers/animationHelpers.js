import $ from 'jquery';

export function fadeOut(element){
	element.addClass('fadeOut')
	element.removeClass('fadeIn')
}

export function fadeIn(element){
	element.addClass('fadeIn')
	element.removeClass('fadeOut')
}

export function enlargePopup(){
	var $popup = $('#App');
	$popup.addClass('enlarge');
}

export function increaseBars(){
	var anger = String(270 * 0.45) + 'px';
	var disgust = String(270 * 0.76) + 'px';
	var fear = String(270 * 0.22) + 'px';
	var joy = String(270 * 0.40) + 'px';
	var sadness = String(270 * 0.15) + 'px';

	$('#Anger').css('width',anger);
	$('#Disgust').css('width',disgust);
	$('#Fear').css('width',fear);
	$('#Joy').css('width',joy);
	$('#Sadness').css('width',sadness);

	var analytical = String(270 * 0.30) + 'px';
	var confident = String(270 * 0.98) + 'px';
	var tentative = String(270 * 0.17) + 'px';
	
	$('#Analytical').css('width',analytical);
	$('#Confident').css('width',confident);
	$('#Tentative').css('width',tentative);

	var openness = String(270 * 0.20) + 'px';
	var mindful = String(270 * 0.95) + 'px';
	var extrovert = String(270 * 0.25) + 'px';
	var agreeable = String(270 * 0.21) + 'px';
	var emotionalRange = String(270 * 0.65) + 'px';
	
	$('#Openness').css('width',openness);
	$('#Mindful').css('width',mindful);
	$('#Extrovert').css('width',extrovert);
	$('#Agreeable').css('width',agreeable);
	$('#EmotionalRange').css('width',emotionalRange);


}