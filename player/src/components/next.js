import React from 'react';
import ReactDOM from 'react-dom';

class Next extends React.Component {
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
}
export default Next;