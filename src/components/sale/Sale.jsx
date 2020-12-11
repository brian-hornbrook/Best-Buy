import React from 'react'
import SaleTitle from './saleTitle/saleTitle'
import SaleInfo from './saleInfo/saleInfo'
import SaleCatagories from './saleCatagories/saleCatagories'
import './style.css'


function Sale() {
    return (
        <div id="sale">

            <div id="Title">

                {/* title */}
                <SaleTitle />

                {/* info */}
                <SaleInfo />
            </div>


            {/* catagories */}
            <SaleCatagories />

        </div>

    )
}

export default Sale
