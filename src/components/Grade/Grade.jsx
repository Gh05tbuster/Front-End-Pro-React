import React from 'react';

class Grade extends React.Component {
    constructor(props) {
        super(props);
        this.image = props.image;
        this.state = {
            counter: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(() => {
            return {counter: this.state.counter+1}
        });
        
    }
    

    render() {
        return (
            <div className='grade'>
                <img src={this.image} onClick={this.handleClick} alt=''/>
                <p className='count'>{this.state.counter}</p>
            </div>
        );
    }
}

export default Grade;