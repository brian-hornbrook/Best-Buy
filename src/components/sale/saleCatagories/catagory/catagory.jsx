import React from 'react'
import './style.css'


function Catagory(props) {
    return (
        <div id="catagory">

            {/* circle */}
            <div id="circle">
                <div id="circle-content">
                    <a>
                        <img id="image" src={props.image} alt="img" />
                    </a>
                </div>

            </div>

            {/* name */}
            <div id="name">
                <a>
                    {props.name}
                </a>
            </div>


        </div>
    )
}

export default Catagory
