import React from 'react';
import ReactDOM from 'react-dom';

import Previous from './previous'
import PlayPause from './playPause';
import Next from './next';

let audio = new Audio();

class MusicManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            playingMusic: false
        };
        audio.src = "http://localhost:3003/music?id=dbs.mp3"
    };

    previousMusic() {

    };

    playPauseMusic() {
        if (this.state.playingMusic === false) {

            audio.play();
            this.setState({playingMusic: true})

        } else {

            audio.pause();
            this.setState({
                playingMusic: false
            });

        };
        
    };

    nextMusic() {

    };

    render() {
        return (
            <div>
                <Previous onClick={this.previousMusic.bind(this)}/>
                <PlayPause onClick={this.playPauseMusic.bind(this)}/>
                <Next onClick={this.nextMusic.bind(this)}/>
            </div>
        );
    };
};

export default MusicManager;