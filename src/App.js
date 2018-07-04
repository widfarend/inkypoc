import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            docInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({docInput: event.target.value});
        console.log(this.state);
    }

    render() {
        return (
            <div className="Inky-Container">
                <div className="Inky-logo-container">
                    <img src="/images/inkyengine.png" className="Inky-logo"/>
                </div>

                <textarea className="Inky-input" value={this.state.docInput} onChange={this.handleChange}></textarea>

                <div id="" className="Inky-render">{this.state.docInput}</div>
            </div>
        );
    }
}

export default App;
