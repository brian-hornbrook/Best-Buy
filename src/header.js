import brand from './img/brand.png';
import location from './img/location.png';
import cart from './img/cart.png';
import downArrow from './img/icon-down-arrow.png';

const header = () => {
    return (
        <div>
            <header>

                {/* location */}
                <div id="location">
                    <p>Your Store: <strong>Lake Worth</strong></p>
                </div>

                <nav>


                    <nav id="header-bar" className="navbar navbar-expand-md navbar-dark">

                        {/* non collapse content */}
                        <div id="non-collapse-area">
                            {/* brand area */}
                            <div id="brand-area">
                                <a>
                                    <img id="brand" src={brand} />
                                </a>
                            </div>

                            {/* collapse button */}
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* search area */}
                            <div id="search-area">
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
                            </div>

                            <div id="search-links">
                                {/* location */}
                                <div id="location-area">
                                    <img src={location} />
                                    <p>Lake Worth</p>
                                </div>

                                {/* cart */}
                                <div id="cart-area">
                                    <img src={cart} />
                                    <p>Cart</p>
                                </div>
                            </div>


                        </div>



                        {/* collapse content */}
                        <div id="collapse-area">
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <div id="links">
                                    <ul>
                                        <div id="navigation">
                                            <li><a>Products</a></li>
                                            <li><a>Brands</a></li>
                                            <li><a>Deals</a></li>
                                            <li><a>Services</a></li>
                                            <li id="list-dropdown">
                                                <div class="dropdown">
                                                    <a id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        More<img src={downArrow} />
                                                    </a>

                                                    <div id="dropdown" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                        <li><a>Credit Cards</a></li>
                                                        <li><a>Top Deals</a></li>
                                                        <li><a>Deal of the Day</a></li>
                                                        <li><a>Gift Cards</a></li>
                                                        <li><a>Gift Ideas</a></li>
                                                        <li><a>For Your Business</a></li>
                                                        <li><a>Donate to St. Jude</a></li>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                        <div id="account">
                                            <li><a>Account</a></li>
                                            <li><a>Recently Viewed</a></li>
                                            <li><a>Order Status</a></li>
                                            <li><a>Saved Items</a></li>
                                        </div>



                                    </ul>

                                </div>

                            </div>
                        </div>

                    </nav>

                </nav>

            </header>
        </div>
    )
}

export default header;