import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    // const navigate = useNavigate();

    // const navigateHandler = () => {
    //     navigate('/products')
    // }
    return (
        <>
            <div>Home works</div>
            <p>Go to
                <Link to='/products'> the product page</Link>
            </p>
            {/* <button onClick={navigateHandler}>Button</button> */}
        </>
    )
}

export default Home