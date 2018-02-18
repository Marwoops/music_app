import React from 'react';
import ReactDOM from 'react-dom';

import {Previous, PlayPause, Next} from './controls';

class MusicManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            musicURL: "http://localhost:3003/music?id=",
            playingMusic: false,
            currentSong: "",
            index: 0,
            loopList: true,
            loopMusic: false
        };

        this.audio = new Audio();
        this.audio.onended = this.nextMusic.bind(this);

    };


    componentDidMount() {
        
        fetch('http://localhost:3003/list')
        .then(data  => data.json())
        .then(data => {
            this.setState({
                musicList: data
            })
        })
        .then(() => this.audio.src = this.state.musicURL + this.state.musicList[this.state.index] + '.mp3')
        .then(() => this.setState({currentSong: this.state.musicList[this.state.index]}))
    };

    previousMusic() {

        if (this.state.loopList) {

            this.state.index--;

            if(this.state.index < 0) {

                this.state.index = this.state.musicList.length - 1;

            }

        }

        this.updateMusic();

    };

    playPauseMusic() {

        if (this.state.playingMusic === false) {

            this.audio.play();
            this.setState({playingMusic: true})

        } else {

            this.audio.pause();
            this.setState({playingMusic: false});

        };
        
    };

    nextMusic() {

        if (this.state.loopList) {

            this.state.index = (this.state.index + 1) % this.state.musicList.length;

        }

        this.updateMusic();

    };

    updateMusic() {

        this.audio.src = this.state.musicURL + this.state.musicList[this.state.index] + '.mp3';
        this.audio.play();
        this.setState({currentSong: this.state.musicList[this.state.index]});

    };

    render() {
        return (
            <div>
                <p id="SongDisplay">{this.state.currentSong}</p>
                <Previous onClick={this.previousMusic.bind(this)}/>
                <PlayPause onClick={this.playPauseMusic.bind(this)}/>
                <Next onClick={this.nextMusic.bind(this)}/>
            </div>
        );
    };
};

export default MusicManager;