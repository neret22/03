import React, { Component } from 'react';
import { TodoContext } from '../App';

export class Button extends Component {
    render() {
        return (
        <TodoContext.Consumer>
            {({onComplete}) => {
                return (
                    <button
                        className="btn btn-sm btn-primary mx-2"
                        onClick={() => {onComplete(this.props.id)}}
                    >Complete</button >
                )
            }}
        </TodoContext.Consumer>
        )
    }
}