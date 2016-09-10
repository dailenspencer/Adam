import React from 'react';
import $ from 'jquery';
import util from 'util';
import spawn from 'child_process';

import Main from './Main';
import {fadeOut, fadeIn} from '../helpers/animationHelpers';
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
		pythonCall(companyName, symbol).then(function(){
			fadeOut($('#Loader'));
			fadeIn($('#Main'));
		})
	}

	render() {
		return (
			<div id="App">
				<Main executePythonScript={this.executePythonScript}/>
				<div id="Loader">
					<img id="LoaderGif" src="./public/media/ring-alt.gif"/>
				</div>
			</div>
		);
	}
}