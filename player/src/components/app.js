// importing modules
import React from 'react';
import ReactDOM from 'react-dom';

// importing components
import MusicManager from './music_manager';
class App extends React.Component {
    render () {
        return (
            <div>
                <MusicManager />
            </div>
        )
    }
};

export default App;