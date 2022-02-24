import AFrame from 'aframe'
import Room from 'aframe-room-component'
import React from 'react'

class AFrameEnviroment extends React.Component{
    render() {
        return <a-scene>
                <a-assets>
                    <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"></img>
                </a-assets>
                <a-plane position="0 4 -3" rotation="-180 90 90" width="4" height="4" src="#groundTexture"></a-plane>

                <a-plane position="2 2 -3" rotation="-180 90 90" width="4" height="4" src="#groundTexture"></a-plane>
                <a-plane position="-2 2 -3" rotation="0 90 90" width="4" height="4" src="#groundTexture"></a-plane>
                <a-plane position="0 2 -5" rotation="0 0 90" width="4" height="4" src="#groundTexture"></a-plane>
        
                <a-plane position="0 0 -3" rotation="-90 90 90" width="4" height="4" src="#groundTexture"></a-plane>
                <a-sky color="#ECECEC"></a-sky>
            </a-scene>
    }
}

export default AFrameEnviorment