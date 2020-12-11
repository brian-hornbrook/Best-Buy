
import React from 'react'
import './bootstrap.css'
import './style.css'


function SaleInfo() {
    return (
        <div id="sale-info" className="horizon">

            {/* info */}
            <div id="info">
                Plus, shop more Holiday Deals happening today.
            </div>

            <br></br>

            {/* faq */}
            <div id="faqs">
                See
                <a href="">
                    <span> Black Friday FAQs</span>
                </a>
            </div>

            {/* button */}
            <div id="shop">
                <a href="">
                    Shop Now
                </a>
            </div>

        </div>
    )
}

export default SaleInfo
