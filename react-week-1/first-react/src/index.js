import React from 'react';
import ReactDOM from 'react-dom';

let element = React.createElement('h1', {}, 'This is react');

ReactDOM.render(element, document.getElementById('app'));