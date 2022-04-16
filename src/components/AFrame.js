//import 'aframe';
import React from 'react';
import 'https://unpkg.com/aframe-room-component/dist/aframe-room-component.min.js';
import 'https://aframe.io/releases/1.2.0/aframe.min.js';
import 'https://cdn.rawgit.com/donmccurdy/aframe-extras/v6.1.0/dist/aframe-extras.min.js';


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
                    <img id="groundTextures" src="https://images.pexels.com/photos/82256/pexels-photo-82256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>

                    <a-asset-item id="wolf"
                                    src="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/wolf_with_animations/scene.gltf?token=GHSAT0AAAAAABSDSTXGDLMSH5VDFJGPO3UUYSVUQJQ)">
                    </a-asset-item>


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
                
                
                {/*Office background sound
                <a-entity sound="src: url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/office_ambiance.wav?v=1649732899279);
                                autoplay: true;
                                refDistance: 4;
                                rolloffFactor: 4">
                </a-entity>*/}

                {/*plant*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/plant/scene.gltf)"
                        scale=".001 .001 .001"
                        position="3 0 -6"
                ></a-entity>

                {/*drawer*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/drawer/model.gltf)"
                        scale=".100 .100 .100"
                        position="3 0 -7"
                ></a-entity>



                 {/*Simple Office Table*/}
                 <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/simple_office_table/model.gltf)"
                        scale="10 10 10"
                        position="-2 0 -3"
                ></a-entity>

                {/*Black Office Chair*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/Office_Chair/model.gltf)"
                        scale="1.5 1.5 1.5"
                        position="3 0 -3"
                ></a-entity>

                {/*White Office Chair*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/White_Office_Chair/model.gltf)"
                        scale="1.5 1.5 1.5"
                        position="3 0 -2"
                ></a-entity>

                 {/*Wood Boss Office Table*/}
                 <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/mehmoodah/vr-office-proj/Ifeoma/Models/wood_boss_office_chair/model.gltf)"
                        scale=".005 .005 .005"
                        position="3 1 0"
                ></a-entity>

                 {/*robot*/}
                 {/*
                 <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/ifeomaok/models/main/Models/robot_playground/scene.gltf)"
                        scale="1 1 1"
                        position="3 0 3"
                        animation-mixer="clip: Experiment"
                ></a-entity>
                 */}


                
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

{/* the floor   */}

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 0"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 0"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 0"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 0"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 0"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -1"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -1"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -1"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -1"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -2"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -2"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -2"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -2"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -3"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -3"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -3"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -3"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -4"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -4"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -4"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -4"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -4"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -5"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -5"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -5"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -5"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -5"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -6"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -6"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -6"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -6"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -6"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -7"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -7"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -7"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 -7.7"></a-box> 
            
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 -7.7"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 -7.7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="0 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="0 0 3.7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="1 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="1 0 3.7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-1 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-1 0 3.7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="2 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="2 0 3.7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-2 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-2 0 3.7"></a-box> 

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="3 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="3 0 3.7"></a-box>

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-3 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-3 0 3.7"></a-box>

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-4 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-4 0 3.7"></a-box>

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-5 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-5 0 3.7"></a-box>

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-6 0 3.7"></a-box>

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-6 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-6 0 3.7"></a-box>

            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 1"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 2"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="1" position="-7 0 3"></a-box> 
            <a-box src="#groundTextures" width="1" height="0.11" depth="0.6" position="-7 0 3.7"></a-box>

            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 1"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 2"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="-7.7 0 3"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="0.6" position="-7.7 0 3.7"></a-box>

            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 1"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 2"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="1" position="3.7 0 3"></a-box> 
            <a-box src="#groundTextures" width="0.6" height="0.11" depth="0.6" position="3.7 0 3.7"></a-box>

            <a-camera position=" 0 1 0" >
        <a-cursor color="#FF6969" fuse="true"></a-cursor>
      </a-camera>
            
            <a-box src="#groundTextures" color="#0000FF" 
            position="2 2.25 0"> 
            <a-animation attribute="rotation"
                        to="0 360 0"
                        repeat="indefinite"
                        dur="5000">
                        
            </a-animation>

            </a-box> 

            </a-scene>


        );
           
    }
}

export default AFrameEnviroment