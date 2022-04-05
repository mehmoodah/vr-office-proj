import 'aframe';
import React from 'react';


//--------------------IMPORT OBJECTS----------------------//


//--------------------IMPORT OBJECTS---------------------

class AFrameEnviroment extends React.Component{
    render() {
        return (


            <a-scene>
                <a-assets>
                    <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
                    <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>








                </a-assets>


                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/scene%20(3).glb?v=1649148396664)"
                        scale=".001 .001 .001"
                ></a-entity>

                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/drawer.glb?v=1649167482215)"
                        scale=".100 .100 .100"
                        position="-2.249 0 0"
                ></a-entity>


                        
                <a-plane position="0 0 -3" rotation="-90 90 90" width="4" height="4" src="#groundTexture"/>
                <a-sky id="bg" radius="30" src="#skyTexture" theta-length="90"/>
                <a-cylinder id="ground" src="#groundTexture" radius="32" height="0.1"/>

                //Ceiling
                <a-plane position="0 4 -3" rotation="-270 90 90" width="16" height="15" color="red"/>

                //Left Wall
                <a-plane position="-8 0 -3" rotation="0 90 0" width="15" height="8" color="green"/>
                
                //Right Wall
                <a-plane position="8 0 -3" rotation="0 -90 0" width="15" height="8" color="green"/>

                //Back Wall
                <a-plane position="0 0 -10.5" rotation="0 0 0" width="16" height="8" color="blue"/>

                //Front Wall
                <a-plane position="-4 0 4.5" rotation="0 180 0"  width="8" height="8" color="orange"/>
                <a-plane position="5 0 4.5" rotation="0 180 0"  width="6" height="8" color="orange"/>

            </a-scene>


        );
           
    }
}

export default AFrameEnviroment