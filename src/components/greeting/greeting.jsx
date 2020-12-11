import react from 'react'
import './style.css'

function Greeting() {
    return (
        <div id="greeting">

            {/* safe */}
            <h3 id="safe">
                Safe, convenient holiday shopping.
                &nbsp;
                <a className="links" href="">See our safety practices</a>
            </h3>


            <br></br>
            {/* <h5>
                test
            </h5> */}

            {/* stress free */}
            <h5 id="stress-free">
                Shop stress-free from home. We're ready to help, online or by phone.
                &nbsp;
                <a className="links" href="">Shop with an Expert</a>
            </h5>

        </div>
    )
}

export default Greeting
