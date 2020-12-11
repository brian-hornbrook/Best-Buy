import React from 'react'
import Products from './Products'
import AccountInfo from './AccountInfo'
import './style.css'


function BottomNavigation() {
    return (
        <nav id="bottom-navigation" class="navbar  navbar-dark">

            {/* products */}
            <Products id="firstProduct" name="Products" />
            <Products name="Brands" />
            <Products name="Deals" />
            <Products name="Services" />

            {/* accounts */}
            <svg id="account-icon" width="20" height="20" viewBox="0 0 32 32" fill="#fff"><path d="M16 .76C7.596.76.76 7.595.76 16S7.595 31.24 16 31.24 31.24 24.404 31.24 16 24.404.76 16 .76zm10.23 23.706V23.19c0-2.6-1.136-5.06-3.118-6.747a.978.978 0 10-1.267 1.49 6.895 6.895 0 012.43 5.257v3.185A13.212 13.212 0 0116 29.286a13.212 13.212 0 01-8.275-2.91V23.19c0-2.966 1.948-5.626 4.752-6.548A5.856 5.856 0 0016 17.823c3.242 0 5.88-2.629 5.88-5.86s-2.638-5.86-5.88-5.86-5.88 2.63-5.88 5.86c0 1.154.34 2.227.92 3.135-3.149 1.404-5.27 4.584-5.27 8.093v1.273A13.224 13.224 0 012.714 16C2.715 8.674 8.675 2.715 16 2.715S29.286 8.675 29.286 16c0 3.214-1.149 6.165-3.056 8.466zM12.076 11.963c0-2.152 1.76-3.904 3.924-3.904s3.924 1.752 3.924 3.904-1.76 3.904-3.924 3.904-3.924-1.752-3.924-3.904z"></path></svg>
            <AccountInfo name="Account" />
            <AccountInfo name="Recently Viewed" />
            <AccountInfo name="Order Status" />
            <AccountInfo name="Saved Items" />

        </nav>
    )
}

export default BottomNavigation