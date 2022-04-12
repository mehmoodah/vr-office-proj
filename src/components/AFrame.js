//import 'aframe';
import React from 'react';
import 'https://unpkg.com/aframe-room-component/dist/aframe-room-component.min.js'
import 'https://aframe.io/releases/1.2.0/aframe.min.js'

//--------------------IMPORT OBJECTS----------------------//

//
//--------------------IMPORT OBJECTS---------------------

class AFrameEnviroment extends React.Component{
    render() {
        return (




            <a-scene>
                <a-assets>
                    <img id="groundTexture" src="https://cdn.aframe.io/a-painter/images/floor.jpg"/>
                    <img id="skyTexture" src="https://cdn.aframe.io/a-painter/images/sky.jpg"/>
                    <audio id="office" src="https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/office_ambiance.wav?v=1649732899279"></audio>

                </a-assets>



                {/*Instruction text*/}
                <a-entity
                    position="-3.000 1.000 -7.500"
                    scale=".300 .300 .300"
                    id="instructionText"
                    text="color: #809dff; align: center; width: 12; wrapCount: 35; zOffset: 0.1; value: Welcome.\nHere are the instructions:\n 1. \n 2. \n 3. \n~" look-at="0 0 0"
                    geometry="primitive: plane; width: auto; height: auto"
                    material="color: #ffffff; shader: flat; visible: true">
                </a-entity>
                
                
                {/*Office background sound*/}
                <a-entity sound="src: url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/office_ambiance.wav?v=1649732899279);
                                autoplay: true;
                                refDistance: 4;
                                rolloffFactor: 4">
                </a-entity>

                {/*drawer*/}
                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/scene%20(3).glb?v=1649148396664)"
                        scale=".001 .001 .001"
                        position="3 0 -6"
                ></a-entity>

                {/*plant*/}
                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/drawer.glb?v=1649167482215)"
                        scale=".100 .100 .100"
                        position="3 0 -7"
                ></a-entity>

                {/*Josh model*/}
                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/model.glb?v=1649346710260)"
                        scale=".010 .010 .010"
                        position="3 0 -5"
                ></a-entity>

                 {/*Simple Office Table*/}
                 <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/simple_office_table.glb?v=1649706104093)"
                        scale="10 10 10"
                        position="3 0 -4"
                ></a-entity>

                {/*Black Office Chair*/}
                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/OfficeChair.glb?v=1649706093123)"
                        scale="1.5 1.5 1.5"
                        position="3 0 -3"
                ></a-entity>

                {/*White Office Chair*/}
                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/lider_comfort_office_chair_white.glb?v=1649706097846)"
                        scale="1.5 1.5 1.5"
                        position="3 0 -2"
                ></a-entity>

                 {/*Wood Boss Office Table*/}
                 <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/wood_boss_office_table.glb?v=1649706145130)"
                        scale=".005 .005 .005"
                        position="3 1 0"
                ></a-entity>


                
                <rw-room position="-2 0 -2" material="color:  #91898c;">
                    <rw-wall position="6 0 -6"></rw-wall>
                    <rw-wall position="6 0 6"></rw-wall>
                    <rw-wall position="-6 0 6"></rw-wall>
                    <rw-wall position="-6 0 -6"></rw-wall>


                    <rw-ceiling></rw-ceiling>
                    <rw-floor></rw-floor>
                </rw-room>
                


                                 
                <a-plane position="0 0 -3" rotation="-90 90 90" width="4" height="4" src="#groundTexture"/>
                <a-sky id="bg" radius="30" src="#skyTexture" theta-length="90"/>
                <a-cylinder id="ground" src="#groundTexture" radius="32" height="0.1"/>



                {/*
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
                */}

            </a-scene>


        );
           
    }
}

export default AFrameEnviroment