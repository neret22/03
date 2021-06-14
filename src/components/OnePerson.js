import React from "react";
import Persons from "./Persons";

const OnePerson = (props) => {
    return (<li className="list-group-item">{props.person}</li>)
}

export default OnePerson;