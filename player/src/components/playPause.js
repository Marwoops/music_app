import React from 'react';
import ReactDOM from 'react-dom';

class PlayPause extends React.Component {
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
}
export default PlayPause;