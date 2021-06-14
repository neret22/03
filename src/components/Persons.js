import React, { Component } from "react";
import OnePerson from "./OnePerson"

export default class Persons extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
           /*  <p>Hello {this.props.persons[0]}</p> */
            <ul className ="list-group">
                {this.props.persons.map( (p, index) => {
                    return (<OnePerson key = {index} person = {p}/>)
                })}
            </ul>
        )
    }
}

