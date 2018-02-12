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
            musicURL: "http://localhost:3003/music?id=",
            playingMusic: false,
            index: 0,
            loopList: true,
            loopMusic: false
        };
    };

    componentDidMount() {
        
        fetch('http://localhost:3003/list')
        .then(data  => data.json())
        .then(data => {
            this.setState({
                musicList: data
            })
        })
        .then(() => this.updateMusic(this.state.musicList[0]))
    };

    previousMusic() {

        if (this.state.loopList) {

            this.state.index--;

            if(this.state.index < 0) {

                this.state.index = this.state.musicList.length - 1;

            }

        }

        this.updateMusic(this.state.musicList[this.state.index]);
        audio.play();
        this.setState({playingMusic: true});

    };

    playPauseMusic() {

        if (this.state.playingMusic === false) {

            audio.play();
            this.setState({playingMusic: true})

        } else {

            audio.pause();
            this.setState({playingMusic: false});

        };
        
    };

    nextMusic() {

        if (this.state.loopList) {

            this.state.index = (this.state.index + 1) % this.state.musicList.length;

        }

        this.updateMusic(this.state.musicList[this.state.index]);
        audio.play();
        this.setState({playingMusic: true});

    };

    updateMusic(musicName) {
        audio.src = this.state.musicURL + musicName + '.mp3';
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