import React from 'react';
import ReactDOM from 'react-dom';

class Previous extends React.Component {
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
}
export default Previous;