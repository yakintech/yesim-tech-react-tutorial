import { useQuery } from '@tanstack/react-query'
import React, { useContext, useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import { CartContext } from '../context/CartContext'

function ProductsTable() {

    const [products, setproducts] = useState([])

    const { addToCart } = useContext(CartContext)

    useEffect(() => {
        axiosInstance.get("products")
            .then(res => setproducts(res.data))
    }, [])


    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Add to Cart</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice}</td>
                        <td><button onClick={() => addToCart(item)}>Add to Cart</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>)
}

export default ProductsTable