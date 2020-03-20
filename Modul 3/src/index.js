import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';

// const HelloWorld = () =>{
//     return <p> ini adalah arrow function </p>
// }

class Gretting extends React.Component{
    render(){
        return <h1>Hello, {this.props.name} </h1>
    }
}

//ReactDOM.render(<HelloWorld />, document.getElementById('root'));
ReactDOM.render(<HelloComponent />, document.getElementById('root'));
//ReactDOM.render(<StateFullComponent />, document.getElementById('root'));

serviceWorker.unregister();
