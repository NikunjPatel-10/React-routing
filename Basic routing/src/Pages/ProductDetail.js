import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const params = useParams()
    return (
        <>
            <div>ProductDetail</div>
            <p>{params.productId}</p>
        </>
    )
}

export default ProductDetail