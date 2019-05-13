import React, { Component } from 'react';

export default class Main extends Component {
    render() {
        return (
            <div>
                <p>Sup yall its me its ya boi asmondgold.</p>
                <a href="/secret">Click here for secret</a>
                <hr/>
                <h2>Please Login first!</h2>
                <hr/>
                <button onClick={this.props.auth.login}>Login</button>
            </div>
        );
    }
}