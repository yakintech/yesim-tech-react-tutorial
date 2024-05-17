import React, { Fragment, useState } from 'react'
import { productsData } from '../data/productsData'

function ProductsTable() {

    const [products, setproducts] = useState(productsData)
    const [isSorted, setisSorted] = useState(false)


    let totalPrice = 0;

    products.forEach(item => {
        totalPrice = totalPrice + item.unitPrice
    })


    const sortByPrice = () => {

        if (isSorted == false) {
            let sortedProducts = products.sort((a, b) => a.unitPrice - b.unitPrice);
            setproducts([...sortedProducts])
            setisSorted(true)
        }
        else {
            let sortedProducts = products.sort((b, a) => a.unitPrice - b.unitPrice);
            setproducts([...sortedProducts])
            setisSorted(false)
        }
    }

    //spread ..., filter, find
    const deleteProduct = (id) => {

        let confirm = window.confirm("Are you sure?")
        if (!confirm)
            return

        let filteredProducts = products.filter(q => q.id != id)
        setproducts(filteredProducts)
    }

    return <>
        <h1>Length: {products.length}</h1>
        <hr />
        <h3>Total Price: {totalPrice.toFixed(2)}</h3>
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th onClick={() => sortByPrice()}>Unit Price</th>
                    <th>Stock</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    products && products.map((item) => <Fragment key={item.id}>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.unitPrice}</td>
                            <td>{item.unitsInStock}</td>
                            <td><button onClick={() => deleteProduct(item.id)}>Delete</button></td>
                        </tr>
                    </Fragment>
                    )
                }
            </tbody>
        </table>
    </>
}

export default ProductsTable