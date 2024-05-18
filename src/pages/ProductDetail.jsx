import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function ProductDetail() {

    let { id, subid } = useParams()

    const navigate = useNavigate()

    return <>
    <button onClick={() => navigate(-1)}>Go BACK!</button>
    <h1>Product Detail</h1>
    <h2>Id: {id}</h2>
    <h2>Subid: {subid}</h2>
    </>
}

export default ProductDetail