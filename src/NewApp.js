import React from 'react'
import logo from './logo.svg';
import Li from './Li';


export default class NewApp extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Group 17E - The best in the world group
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

            <ul>
                <Li name ="Anastasia"/>
                <Li name ="Vladimir"/>
                <Li name ="Anna"/>
            </ul>

            </header>
        )
    }

}
