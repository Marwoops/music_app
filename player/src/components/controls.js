import React from 'react';
import ReactDOM from 'react-dom';

export class Previous extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <button onClick={() => this.props.onClick()}>
                PREVIOUS
            </button>
        );
    };
};

export class PlayPause extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <button onClick={() => this.props.onClick()}>
                PLAY
            </button>
        );
    };
};

export class Next extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <button onClick={() => this.props.onClick()}>
                NEXT
            </button>
        );
    };
};