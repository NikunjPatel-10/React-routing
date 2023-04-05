import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const PRODUCTS = [
        { id: 'p1', title: 'Prodcut 1' },
        { id: 'p2', title: 'Prodcut 2' },
        { id: 'p3', title: 'Prodcut 3' }
    ]
    return (
        <>
            <div>The Products page</div>
            <ul>
                {PRODUCTS.map((prod) => (<li key={prod.id}><Link to={`/products/${prod.id}`}>
                    {prod.title}
                </Link></li>))}
            </ul>
        </>
    )
}

export default Products