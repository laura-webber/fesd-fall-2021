import React from 'react';

export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((state) => ({count: this.state.count + 1}));
    }
    render(){
        return (
            <button
                className="btn btn-primary"
                onClick={this.handleClick}>
                Counter {this.state.count}
            </button>
            );

    }
}