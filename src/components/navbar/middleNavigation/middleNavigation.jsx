import React from 'react'
import './style.css'
import location from './location.png'
import cart from './cart.svg'


function middleNavigation() {
    return (
        <div id="middle-navigation">
            <div id="form-area" className="horizon">
                <form id="" className="form-inline my-2 my-lg-0">
                    {/* search bar */}
                    <div id="searchBar-area">
                        <input id="search-bar" className="form-control mr-sm-2" type="text" placeholder="Search Best Buy" aria-label="Search" />
                    </div>

                    {/* search button */}
                    <div id="searchBar-button-area">
                        <svg id="search-button" className="form-control" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        </svg>
                    </div>
                </form>


            </div>

            <div id="middleRight-navigation" className="horizon">
                {/* location */}
                <img src={location} alt="location" />
                <a href="">Lake Worth</a>

                {/* seperator */}
                <div id="seperator-right" className="horizon"></div>
                <div id="seperator-left" className="horizon"></div>

                {/* cart */}
                <img src={cart} alt="cart" />
                <a href="">Cart</a>
            </div>



        </div>
    )
}

export default middleNavigation
