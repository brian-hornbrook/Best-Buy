import brand from './img/brand.png';
import location from './img/location.png';

const header = () => {
    return (
        <div>
            <header>
                <nav>
                    <div id="brand-area">
                        <a>
                            <img id="brand" src={brand} />
                        </a>
                    </div>
                    <nav className="navbar navbar-expand-lg navbar-dark">

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



                        {/* location */}
                        <div id="location-area">
                            <img src={location} />
                        </div>

                        {/* collapse content */}
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                            <div id="links">
                                <ul>
                                    <li><a>Products</a></li>
                                    <li><a>Brands</a></li>
                                    <li><a>Deals</a></li>
                                    <li><a>Services</a></li>

                                    {/* spacer */}
                                    <div className="collapse-spacer"></div>

                                    <li><a>Account</a></li>
                                    <li><a>Recently Viewed</a></li>
                                    <li><a>Order Status</a></li>
                                    <li><a>Saved Items</a></li>

                                    {/* spacer */}
                                    <div className="collapse-spacer"></div>

                                    <li><a>Credit Cards</a></li>
                                    <li><a>Top Deals</a></li>
                                    <li><a>Deal of the Day</a></li>
                                    <li><a>Gift Cards</a></li>
                                    <li><a>Gift Ideas</a></li>
                                    <li><a>For Your Business</a></li>
                                    <li><a>Donate to St. Jude</a></li>






                                </ul>

                            </div>
                        </div>
                    </nav>

                </nav>

            </header>
        </div>
    )
}

export default header;