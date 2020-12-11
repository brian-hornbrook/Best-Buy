import React from 'react'
import TopNavigation from './topNavigation/topNavigation'
import MiddleNavigation from './middleNavigation/middleNavigation'
import ButtomNavigation from './bottomNavigation/bottomNavigation'
import './bootstrap.css'
import './style.css'
import brand from './brand.png'
import BottomNavigation from './bottomNavigation/bottomNavigation'


function Navbar() {
    return (
        <div id="navbar-fit">
            <nav id="navbar" class="navbar navbar-expand-sm navbar-dark">

                {/* logo */}
                <div id="brand-area">
                    <a className="navbar-brand" href="http://localhost:3000/">
                        <img id="brand" src={brand} alt="brand" />
                    </a>
                </div>

                {/* right-navbar */}
                <div id="right-navigation">
                    <TopNavigation />
                    <MiddleNavigation />
                </div>
            </nav>

            {/* main navigation */}
            <BottomNavigation />

        </div>
    )
}

export default Navbar
