import React from 'react';

class Events extends React.Component {
    clickMe = () => {
        return alert('I was clicked')
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          alert(`The Enter Key was pressed, your input is: ${event.target.value}`);
        }
      }

    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: true,
        };
      }
    
      handleClick = () => {
        this.setState((prevState) => ({
          isToggleOn: !prevState.isToggleOn,
        }));
      }
    

    render() {
        return(
            <div>
                <button className='clickMe' onClick={this.clickMe}click Me>Click me</button>
                <input type="text" onKeyPress={this.handleKeyPress} />
                <p className='handleClick'> Exercise 9: <button onClick={this.handleClick}> 
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                </p>
            </div>
        )
    }
}

export default Events;