import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
require('aframe');
require('aframe-room-component');

class App extends Component {
  render () {
    return (
    <a-scene>
        <rw-room position="-2 0 -2" material="color:#866">
            <rw-wall position="4 0 0"></rw-wall>
            <rw-wall position="4 0 4"></rw-wall>
            <rw-wall position="0 0 4"></rw-wall>
            <rw-wall position="0 0 0">
                <rw-doorhole id="holeA"></rw-doorhole>
                <rw-doorlink from="#holeA" to="#holeB" position="2.5 0 0"></rw-doorlink>
            </rw-wall>
        </rw-room>
        <rw-room position="0 0 -3">
            <rw-wall position=" 1 0 -1" material="color:#787"></rw-wall>
            <rw-wall position=" 1 0  1" material="color:#877">
                <rw-doorhole id="holeB"></rw-doorhole>
            </rw-wall>
            <rw-wall position="-1 0  1" material="color:#878"></rw-wall>
            <rw-wall position="-1 0 -1" material="color:#778"></rw-wall>
        </rw-room>
    </a-scene>
    );
    }
  }