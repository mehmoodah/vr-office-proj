import 'https://aframe.io/releases/1.2.0/aframe.min.js'
import 'https://unpkg.com/aframe-room-component/dist/aframe-room-component.min.js'
import React, {Component} from 'react'
class App extends Component {
  render () {
    return (
      <a-scene>
        

      <rw-room position="-2 0 -2" material="color:  #91898c;  alphaTest:  0;  offset:  [object Object];  repeat:  [object Object];  shader:  msdf;  vertexColors:  face">        
        <rw-wall position="4 0 0"></rw-wall>
        <rw-wall position="4 0 4"></rw-wall>
        <rw-wall position="0 0 4"></rw-wall>
        <rw-wall position="0 0 0">
        </rw-wall>
        <a-entity gltf-model={require("C:/Users/baroz/OneDrive/Documents/React/fo-app/work-webvr/src/EricGtlf/eric.gltf")} rotation="270 0 0" scale="0.01 0.01 0.01" 
        position="1.99207 -0.17827 0"></a-entity>

        <rw-ceiling material="color:#91898c"></rw-ceiling>
      </rw-room>
    </a-scene>
    );
  }
  
}

export default App;