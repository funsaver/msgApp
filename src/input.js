 import React from 'react';

class Input extends React.Component {
	constructor(props){
		super(props)
		this.handleClick = this.handleClick.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

  	handleClick(event){
  		event.preventDefault();
  		this.props.update(this.refs.message.value);
  		this.refs.message.value = ''
  	}

    handleKeyPress(event) {
        if(event.charCode===13 && event.shiftKey === false) {
          console.log('enter clickeddd');
      		this.handleClick(event)
      }
    }

  	render() {
    	return (
		  	<div className="hej">
		    	<textarea onKeyPress={this.handleKeyPress} ref="message" id={this.props.id} />
		    	<button onClick={this.handleClick}>Send</button>    
		  	</div>
    	)
  	}
}

export default Input;
