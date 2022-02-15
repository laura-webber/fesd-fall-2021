import React from 'react';
import Artwork from './artwork';
import { ArtworkData } from '../data/artwork-data';

export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "National Gallery of Art",
            city: "Washington, DC",
            collection: ArtworkData
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log('the add artwork button was clicked')
    }

    render(){
        let jsxArt = this.state.collection.map( (artwork, index) =>
            <Artwork key={index} artist={artwork.artist} title={artwork.title} url={artwork.url} />
        );
        return (
            <div>
                <h1>Welcome to the {this.state.name}'s Online Gallery</h1>
                {jsxArt}
                <button onClick={this.handleClick}>Add artwork</button>
            </div> 
        );
    }
}