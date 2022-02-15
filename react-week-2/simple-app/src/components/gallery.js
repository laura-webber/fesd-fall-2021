import React from 'react';
import Artwork from './artwork';

export default class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "National Gallery of Art",
            city: "Washington, DC",
            collection: [
                {
                    artist: "Mary Cassat",
                    title: "The Boating Party",
                    url: "https://media.nga.gov/iiif/da9ff160-755f-4f9a-a78c-75727ce61a3b/full/!384,384/0/default.jpg"
                },
                {
                    artist: "Kerry James Marshall",
                    title: "Great America",
                    url: "https://media.nga.gov/iiif/b813b8d1-6b20-47b2-9c65-5913b6a29556/full/!384,384/0/default.jpg"
                },
                {
                    artist: "Johannes Vermeer",
                    title: "Girl with the Red Hat",
                    url: "https://media.nga.gov/iiif/b705a403-3496-42e8-abf5-a37e34c32198/full/!384,384/0/default.jpg"
                }

            ]
        }
    }

    handleSubmit(){
        console.log('the button was clicked')
        this.setState((prevState) => {
            //grab data from submitted form
            //take previous state and add something to the collection
        });
    }

    render(){
        let jsxArt = this.state.collection.map( (artwork, index) =>
            <Artwork key={index} artist={artwork.artist} title={artwork.title} url={artwork.url} />
        );
        return (
            <div>
                <h1>Welcome to the {this.state.name}'s Online Gallery</h1>
                {jsxArt}
                
                    <div className="field">
                        <label className="label">Artist</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="enter artist" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Title</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="enter title" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Url</label>
                        <div className="control">
                            <input className="input" type="text" placeholder="enter url" />
                        </div>
                    </div>
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </div>
                
            </div> 
        );
    }
}