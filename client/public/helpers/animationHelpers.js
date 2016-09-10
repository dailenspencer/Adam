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

export function increaseBars(toneScores){
	toneScores = JSON.parse(toneScores[0]).map(function(score){
		return score;
	})
	

	var anger = String(270 * toneScores[0]) + 'px';
	var disgust = String(270 * toneScores[1]) + 'px';
	var fear = String(270 * toneScores[2]) + 'px';
	var joy = String(270 * toneScores[3]) + 'px';
	var sadness = String(270 * toneScores[4]) + 'px';

	$('#Anger').css('width',anger);
	$('#Disgust').css('width',disgust);
	$('#Fear').css('width',fear);
	$('#Joy').css('width',joy);
	$('#Sadness').css('width',sadness);

	var analytical = String(270 * toneScores[5]) + 'px';
	var confident = String(270 * toneScores[6]) + 'px';
	var tentative = String(270 * toneScores[7]) + 'px';
	
	$('#Analytical').css('width',analytical);
	$('#Confident').css('width',confident);
	$('#Tentative').css('width',tentative);

	var openness = String(270 * toneScores[8]) + 'px';
	var mindful = String(270 * toneScores[9]) + 'px';
	var extrovert = String(270 * toneScores[10]) + 'px';
	var agreeable = String(270 * toneScores[11]) + 'px';
	var emotionalRange = String(270 * toneScores[12]) + 'px';
	
	$('#Openness').css('width',openness);
	$('#Mindful').css('width',mindful);
	$('#Extrovert').css('width',extrovert);
	$('#Agreeable').css('width',agreeable);
	$('#EmotionalRange').css('width',emotionalRange);


}