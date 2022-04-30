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
                </a-assets>



                {/*plant*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/plant/scene.gltf)"
                        scale=".001 .001 .001"
                        position="2 0 -7.6"
                ></a-entity>
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/plant/scene.gltf)"
                        scale=".001 .001 .001"
                        position="-7.9 0 -7.6"
                ></a-entity>
                 
                

                {/*drawer*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/drawer/model.gltf)"
                        scale=".100 .100 .100"
                        position="3 0 -7"
                ></a-entity>
                
                

                

                {/*Josh model*/}
                <a-asset-item id="man"
                          src="https://raw.githubusercontent.com/alialqarni2040/model/main/talking_2/scene.gltf">
                    </a-asset-item>

                <a-gltf-model
                    position="-1.5 -.2 -7"
                    scale="1.1 1.1 1.2"
                    rotation="0 -10 0"
                    src="#man"
                    animation-mixer="clip:Animation"
                ></a-gltf-model>
               

                
        {/*Wood Boss Office Table*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/wood_boss_office_chair/model.gltf)"
                        scale=".006 .006 .006"
                        position="-1.5 1 -6"
                        rotation="0 -90 0"
                        
                ></a-entity>


                {/*Black Office Chair*/}
                <a-entity 
                        gltf-model="url(https://cdn.glitch.global/0e699687-00d8-48d5-9d83-9e74473ca550/OfficeChair.glb?v=1649706093123)"
                        scale="1.5 1.5 1.5"
                        position="-1.5 0 -7"
                        rotation="0 0 0"
                ></a-entity>

                {/*Board and table*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/a_class_room/scene.gltf)"
                        scale="5 5 5"
                        position="-6 0 -7"
                        rotation="0 0 0"
                ></a-entity>

                
                 {/*folders*/}
                 <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/folders/scene.gltf)"
                        scale="1.2 1 1.2"
                        position="3 2 -6.5"
                        rotation="0 90 0"
                        
                ></a-entity>
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/folders/scene.gltf)"
                        scale="1.2 1 1.2"
                        position="3.05 2 -6.5"
                        rotation="0 90 0"
                        
                ></a-entity>

                {/*office_phone*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/office_phone/scene.gltf)"
                        scale=".0001 .0001 .0001"
                        position="-2.4 1.1 -6"
                        rotation="0 0 0"
                        
                ></a-entity>

                {/*Notebook_and_pen*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/notebook_and_pen/scene.gltf)"
                        scale=".05 .05 .05"
                        position="-1 1.1 -6"
                        rotation="0 0 0"
                        
                ></a-entity>

                 {/*window_blinds*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/window_blinds/scene.gltf)"
                        scale=".02 .03 .02"
                        position="-2 0.5 -9"
                        rotation="0 0 0"
                        
                ></a-entity>

                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/window_blinds/scene.gltf)"
                        scale=".02 .03 .02"
                        position="-6.5 0.5 -9"
                        rotation="0 0 0"
                        
                ></a-entity>

                {/*Office_printer*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/mfp_office_printer/scene.gltf)"
                        scale=".01 .015 .01"
                        position="1 0 -7.5"
                        rotation="0 0 0"
                        
                ></a-entity>

                {/*table_meeting*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/table%20meeting/scene.gltf)"
                        scale=".03 .03 .03"
                        position="-5 0 0"
                        rotation="0 0 0"
                        
                ></a-entity>

                {/*coffee_table*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/jahre_coffee_table_-_109385/scene.gltf)"
                        scale=".9 2 .9"
                        position="-1.4 0 -4.8"
                        rotation="0 0 0"
                        
                ></a-entity>

                {/*low_poly_laptop*/}
                 <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/low_poly_laptop/scene.gltf)"
                        scale="0.09 0.09 0.09"
                        position="-1.5 1.1 -6"
                        rotation="0 180 0"
                        
                ></a-entity>

                

                {/*White Office Chair*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/White_Office_Chair/model.gltf)"
                        scale="1 1 1"
                        position="-2.6 0 -4"
                        rotation="0 -40 0"
                ></a-entity>
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/White_Office_Chair/model.gltf)"
                        scale="1 1 1"
                        position="-0.3 0 -5.5"
                        rotation="0 -220 0"
                ></a-entity>
                

                {/*clock*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/clock_3/scene.gltf)"
                        scale="1.2 1.2 1.2"
                        position="-2.2 2 -7.9"
                        rotation="0 0 0"
                        
                ></a-entity>

                {/*coffee_machine*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/coffee_machine/scene.gltf)"
                        scale=".5 .5 .5"
                        position="3. 1.2 -4"
                        rotation="0 90 0"
                        
                ></a-entity>

               {/*coffee_table*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/lion_paw_table/scene.gltf)"
                        scale="15 30 15"
                        position="3.2 -0.7 -4.2"
                        rotation="0 180 0"
                        
                ></a-entity>

                {/*floor_lamp*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/waterloo_floor_lamp_whitebrushed_brass_-_56053/scene.gltf)"
                        scale="1 1.2 1"
                        position="-2 0 -7.5"
                        rotation="0 270 0"
                        
                ></a-entity>

                {/*glass_cup*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/glass_cup/scene.gltf)"
                        scale="0.0005 0.0005 0.0005"
                        position="3. 1.2 -4"
                        rotation="0 180 0"
                        
                ></a-entity>
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/glass_cup/scene.gltf)"
                        scale="0.0005 0.0005 0.0005"
                        position="3. 1.2 -4.2"
                        rotation="0 180 0"
                        
                ></a-entity>

                {/*floor_lamp*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/b2-c/scene.gltf)"
                        scale="0.05 0.05 0.05"
                        position="4 1.3 1.3"
                        rotation="0 -90 0"
                        
                ></a-entity>
                 {/*frame_low_poly*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/frame_low_poly/scene.gltf)"
                        scale="0.02 0.01 0.02"
                        position="-7.8 .8 1"
                        rotation="0 -90 0"
                        
                ></a-entity>

                {/*simple_door*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/simple_door/scene.gltf)"
                        scale="1 1 1"
                        position="-2 0 4"
                        rotation="0 0 0"
                        
                ></a-entity>

                 {/*water_fountain*/}
                 <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/water_fountain/scene.gltf)"
                        scale="0.0015 0.001 0.0015"
                        position="3.05 1.3 3.9"
                        rotation="0 180 0"
                        
                ></a-entity>


                {/*water_glass*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/casablanca_water_glass_300ml/scene.gltf)"
                        scale="0.001 0.0013 0.001"
                        position="3.15 1.29 3.4"
                        rotation="0 180 0"
                        
                ></a-entity>

                {/*living_room*/}
                <a-entity 
                        gltf-model="url(https://raw.githubusercontent.com/alialqarni2040/model/main/stylised_living_room/scene.gltf)"
                        scale="1.2 1 1.2"
                        position="1 0 1"
                        rotation="0 -90 0"
                        
                ></a-entity>


                

                {/*walls*/}
                <rw-room position="-2 0 -2" material="color:  #91898c;" height="3">
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

                {/* animation 

                <a-box position="1 1 0" 
                animation="property: position; to: 3 3 3; dur: 5000; easing: linear; loop: true" color="#0000FF"></a-box> 

                <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>

                <a-entity
                geometry="primitive: box"
                material="color: red"
                animation__mouseenter="property: position; to: 3 3 3; dur: 5000; easing: linear; loop: true; startEvents: mouseenter;"
                animation__mouseleave="property: position; to: 1 1 1; dur: 5000; easing: linear; loop: true; startEvents: mouseleave;">
                </a-entity>
               */}

               
            {/* animation 
                <a-box position="1 1 0" 
                animation="property: position; to: 3 3 3; dur: 5000; easing: linear; loop: true" color="#0000FF"></a-box> 
                <a-entity id="mouseCursor" cursor="rayOrigin: mouse"></a-entity>
                <a-entity
                geometry="primitive: box"
                material="color: red"
                animation__mouseenter="property: position; to: 3 3 3; dur: 5000; easing: linear; loop: true; startEvents: mouseenter;"
                animation__mouseleave="property: position; to: 1 1 1; dur: 5000; easing: linear; loop: true; startEvents: mouseleave;">
                </a-entity>
               */}

               
                </a-scene>


        );
           
    }
}

export default AFrameEnviroment