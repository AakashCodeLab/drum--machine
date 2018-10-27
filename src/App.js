import React, {Component} from 'react';
import './styles/css/styles.css';
import BackGround from "./images/background.jpg";
import {Sample} from "./components/Sample";

class App extends Component {
    render() {
        const style = {
            backgroundImage: `url("${BackGround}")`,
        };

        return (
            <div className="App" id="display" style={style}>
                <header>
                    <h1>Drum Machine</h1>
                </header>
                <main className="drum-machine">
                    <Sample audio="audio/tom-left.mp3" image="images/left-tom.png" title="Tom 01" trigger="q"/>
                    <Sample audio="audio/Boom_Chuk2_130.mp3" image="images/right-tom.png" title="Tom 02" trigger="w"/>
                     {/* <Sample audio="audio/tom-right.mp3" image="images/right-tom.png" title="Tom 02" trigger="w"/>*/}
                    <Sample audio="audio/Driving_Force.mp3" image="images/stand-tom.png" title="Tom 03" trigger="e"/>
                    {/*<Sample audio="audio/tom-stand.mp3" image="images/stand-tom.png" title="Tom 03" trigger="e"/>*/}
                    <Sample audio="audio/closed-hihat.mp3" image="images/closed-hihat.png" title="Closed Hi-hat" trigger="a"/>
                    <Sample audio="audio/snare.mp3" image="images/snare.png" title="Snare" trigger="s"/>

                    <Sample audio="audio/first_beat.mp3" image="images/crash.png" title="Crash Cymbals" trigger="d"/>
                    {/*  <Sample audio="audio/crash.mp3" image="images/crash.png" title="Crash Cymbals" trigger="d"/>*/}
                    <Sample audio="audio/half-hihat.mp3" image="images/half-hihat.png" title="Opened Hi-hat" trigger="z"/>
                    <Sample audio="audio/kick.mp3" image="images/kick.png" title="Kick" trigger="x"/>
                    <Sample audio="audio/snare-rim.mp3" image="images/snare-rim.png" title="Snare Rim" trigger="c"/>
                </main>
                <footer>
                    <a href="http://www.skysingh.tk" target="_blank" rel="noopener noreferrer">
                        <span>codedBy  </span>
                       <span>Aakash Singh</span>
                    </a>
                </footer>
            </div>
        );
    }
}

export default App;
