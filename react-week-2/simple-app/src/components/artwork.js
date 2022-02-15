import React from 'react';

export default class Artwork extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            artist: props.artist,
            title: props.title,
            url: props.url
        }
    }

    render(){
        return (
            <div className="card">
                <div className="card-image">
                    <div className="image is-4by3">
                        <img src={this.state.url} alt=""></img>
                    </div>
                </div>
                <div className="card-content">
                    <div className="content">
                        {this.state.title} by {this.state.artist}
                        <br />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}