import React from 'react';
import Movie from './movie';

export default class MovieList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movies: []
        };
    }

    render(){
        return this.state.movies.map((movie, index) => {
            return <Movie key={index}/>
            });
    }
}