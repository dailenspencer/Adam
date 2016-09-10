import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
export default class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			companyFieldText : '',
			companyFieldErrorTex : '',
			symbolFieldText : '',
			symbolFieldErrorText : ''
		}
		this.handleCompanyFieldChange = this.handleCompanyFieldChange.bind(this);
		this.handleSymbolFieldChange = this.handleSymbolFieldChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	handleCompanyFieldChange(e){
		this.setState({companyFieldText: e.target.value})
	}

	handleSymbolFieldChange(e){
		this.setState({symbolFieldText: e.target.value})
	}

	handleClick(){
		if(this.state.companyFieldText.length === 0){
			this.setState({companyFieldErrorText: 'Please Enter Company Name'})
			return;
		} else {
			this.setState({companyFieldErrorText: ''})
		}
		if(this.state.symbolFieldText.length === 0){
			this.setState({symbolFieldErrorText: 'Please Enter Stock Symbol'})
			return;
		} else {
			this.setState({symbolFieldErrorText: ''})
		}
		this.props.executePythonScript(this.state.companyFieldText, this.state.symbolFieldText)
	}
	
	render() {
		const styles = {
			errorStyle: {
				'color': 'white',
				'fontFamily': 'Raleway',
				'fontWeight': '100'
			},
			underlineStyle: {
				borderColor: 'white',
				color: 'white'
			},
			floatingLabelStyle: {
				'color': 'white',
				'fontFamily': 'Raleway',
				'fontWeight': '100'
			},
			floatingLabelFocusStyle: {
				'color': 'white',
				'fontFamily': 'Raleway',
				'fontWeight': '100'
			},
			hintStyle : {
				'color':'white',
				'fontSize':'18px',
				'textAlign':'center',
				'fontFamily': 'Raleway',
				'fontWeight': '100'
			},
			inputStyle : {
				'autoComplete':'off',
				'color': 'white',
				'width': '100%',
				'fontFamily': 'Raleway',
				'fontWeight': '100',
				'fontSize': '20px'
			}
		};
		
		return (
			<div id="Main">
				<div id="logoHolder">
					<img id="logo" src="public/media/searching.png"/>
				</div>
				<MuiThemeProvider>
	            	<TextField
	            		ref="companyField"
	            		style={{'width':'80%'}}
      					floatingLabelText="Enter Company Name"
      					floatingLabelStyle={styles.floatingLabelStyle}
      					hintStyle={styles.hintStyle}
      					errorStyle={styles.errorStyle}
		      			inputStyle = {styles.inputStyle}
		      			underlineFocusStyle={styles.underlineStyle}
		      			onChange={this.handleCompanyFieldChange}
		      			errorText={this.state.companyFieldErrorText}
	    			/>
  				</MuiThemeProvider>
  				<MuiThemeProvider>
	            	<TextField
	            		ref="symbolField"
	            		style={{'width':'80%'}}
      					floatingLabelText="Enter Stock Symbol"
      					floatingLabelStyle={styles.floatingLabelStyle}
      					hintStyle={styles.hintStyle}
      					errorStyle={styles.errorStyle}
		      			inputStyle = {styles.inputStyle}
		      			underlineFocusStyle={styles.underlineStyle}
		      			onChange={this.handleSymbolFieldChange}
		      			errorText={this.state.symbolFieldErrorText}
	    			/>
	    		</MuiThemeProvider>
	    		<h id="NoResultHeader"></h>
	    		<div id="searchHolder">
					<img id="search" src="public/media/search.png" style={{'marginTop':'20px', 'width':'40px','height':'40px'}} onClick={() => this.handleClick()}/>
				</div>
			</div>
		);
	}
}