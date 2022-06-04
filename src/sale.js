import catagoryInfoData from './data';


const renderCatagoryInfo = eachCatagory => (
    <div key={eachCatagory.id} className="catagory"><a>
        <div className="catagory-area">
            <div id="circle-area">
                <div className="circle-content"><img src={eachCatagory.url} /></div>
                <p>{eachCatagory.name}</p>
            </div>

        </div>
    </a></div>
)

const catagoryInfo = props => {
    const data = catagoryInfoData.map(renderCatagoryInfo);
    return <div id="catagories">{data}</div>
}

const Sale = () => {
    return (
        <div id="sale">
            <div id="title">
                <div id="title-info" className="container">
                    <h2>Our</h2>
                    <h1>Black Friday <span>is here.</span></h1>
                    <h6>Shop 1,000s of <strong>Black Friday Deals</strong> right now</h6>
                </div>
                <div id="full-list" className="container">
                    <h6>Plus, shop more Holiday Deals happening today.</h6>
                    <p>See<span>Black Friday FAQs</span> <button type="button" class="btn btn-warning">Shop Now</button></p>
                </div>
            </div>
            <p>Shop Black Friday Deals by catagory</p>
            <div>
                {catagoryInfo()}
            </div>
        </div>
    )
}

export default Sale;