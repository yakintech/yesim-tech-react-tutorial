import React, { useState } from 'react'
import { productsData } from '../data/productsData'
import { Link, useNavigate } from 'react-router-dom'

function ProductsPage() {

    const [products, setproducts] = useState(productsData)

    const navigate = useNavigate() // redirecttoaction

    const goToDetail = (id) => {
        navigate("/products/" + id)
    }

    return (<>
        <ul>
            {
                products && products.map(item => <li>
                    <Link to={'/products/' + item.id}>
                        {item.name}
                    </Link>
                    <button onClick={() => goToDetail(item.id,)}>Go to detail</button>

                </li>)
            }
        </ul>
    </>)
}

export default ProductsPage