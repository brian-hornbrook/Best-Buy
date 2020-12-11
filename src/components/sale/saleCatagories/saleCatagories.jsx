import React from 'react'
import Catagory from './catagory/catagory'
import './style.css'
import tv from './media/tv.png'
import pc from './media/pc.png'
import tablet from './media/tab.png'
import videoGame from './media/videoGame.png'
import cellPhone from './media/cellPhone.png'
import appliance from './media/appliance.png'
import apple from './media/apple.png'
import sound from './media/sound.png'
import streaming from './media/streaming.png'
import headPhone from './media/headPhone.png'
import pcGaming from './media/pcGaming.png'
import applianceSmall from './media/applianceSmall.png'
import fitness from './media/fitness.png'
import smartHome from './media/smartHome.png'
import camera from './media/camera.png'
import drone from './media/drone.png'
import printer from './media/printer.png'
import hoverBoard from './media/hoverBoard.png'



function SaleCatagories() {
    return (
        <div id="saleCatagories">

            {/* info */}
            <div id="info">
                <h2 id="info-content">Shop Black Friday Deals by catagory</h2>
            </div>

            {/* catagories */}
            <div id="page-size">
                <div id="catagories" className="row">
                    <Catagory image={tv} name="TVs" />
                    <Catagory image={pc} name="Laptops & Computers" />
                    <Catagory image={tablet} name="Tablets & E-Readers" />
                    <Catagory image={videoGame} name="Video Games, Consoles & VR" />
                    <Catagory image={cellPhone} name="Cell Phones" />
                    <Catagory image={appliance} name="Major Appliances" />
                    <Catagory image={apple} name="Apple" />
                    <Catagory image={sound} name="Sound Bars, Speakers & Accessories" />
                    <Catagory image={streaming} name="Streaming Media Players, Music & Movies" />
                    <Catagory image={headPhone} name="Headphones" />
                    <Catagory image={pcGaming} name="PC Gaming" />
                    <Catagory image={applianceSmall} name="Small Appliances, Floor Care & Home Air Quality" />
                    <Catagory image={fitness} name="Smartwatches, Health & Fitness" />
                    <Catagory image={smartHome} name="Smart Home & Networking" />
                    <Catagory image={camera} name="Cameras & Camcorders" />
                    <Catagory image={drone} name="Toys & Drones" />
                    <Catagory image={printer} name="Printers, Ink & Home Office" />
                    <Catagory image={hoverBoard} name="Hoverboards, Gardens & Unique Finds" />
                </div>
            </div>

        </div>
    )
}

export default SaleCatagories
