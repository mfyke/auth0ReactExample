import React, { Component } from 'react';

export default class Secret extends Component {
    render() {
        return (
            <div>
                <h1>Sup yall its me its your boi secretgold.</h1>
                <a href="/">Home</a>
                <br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        );
    }
}
