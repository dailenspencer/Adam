import React from 'react';
import $ from 'jquery';
import util from 'util';
import spawn from 'child_process';

import Main from './Main';
import Bar from './Bar';

import {fadeOut, fadeIn, enlargePopup, increaseBars} from '../helpers/animationHelpers';
import {pythonCall} from '../helpers/serverCalls'
export default class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
		
	}
	
	executePythonScript(companyName, symbol){
		fadeOut($('#Main'));
		fadeIn($('#Loader'));
		
		pythonCall(companyName, symbol).then(function(response){
			fadeOut($('#Loader'));
			enlargePopup()
			fadeIn($('#GraphsHolder'));
			setTimeout(increaseBars, 2000);
		})
	}

	render() {
		return (
			<div id="App">
				<Main executePythonScript={this.executePythonScript}/>
				<div id="Loader">
					<img id="LoaderGif" src="./public/media/ring-alt.gif"/>
				</div>
				<div id="GraphsHolder">
					<div id="EmotionToneGraph" className="Graph">
						<h id="EmotialToneHeader">Emotional Tone</h>
						<Bar id="Anger" name="Anger"/>
						<Bar id="Disgust" name="Disgust"/>
						<Bar id="Fear" name="Fear"/>
						<Bar id="Joy" name="Joy"/>
						<Bar id="Sadness" name="Sadness"/>
					</div>
					<div id="LaguageStyleGraph" className="Graph">
						<h id="LanguageStyleHeader">Language Style</h>
						<Bar id="Analytical" name="Analytical"/>
						<Bar id="Confident" name="Confident"/>
						<Bar id="Tentative" name="Tentative"/>
					</div>
					<div id="SocialTendenciesGraph" className="Graph">
						<h id="SocialTendenciesHeader">Social Tendencies</h>
						<Bar id="Openness" name="Openness"/>
						<Bar id="Mindful" name="Mindful"/>
						<Bar id="Extrovert" name="Extrovertive"/>
						<Bar id="Agreeable" name="Agreeable"/>
						<Bar id="EmotionalRange" name="Emotional Range"/>
					</div>
					<h id="StudyNote">*This analysis was powered by IBM’s Artificial Intelligence Program, Watson. A total of 32 articles were taken into account for this test.</h>
				</div>
			</div>
		);
	}
}