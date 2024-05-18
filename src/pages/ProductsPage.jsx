import React, { useState } from 'react'
import { productsData } from '../data/productsData'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function ProductsPage() {

    const [products, setproducts] = useState(productsData)

    const navigate = useNavigate() // redirecttoaction

    const { search } = useLocation();

    //query strings parsing
    const searchParams = new URLSearchParams(search);
    const limit = searchParams.get('limit')
    const page = searchParams.get('page')

    console.log("Limit ", limit)
    console.log("Page ", page)

    const goToDetail = (id) => {
        navigate("/products/" + id)
    }

    return (<>
        <ul>
            {
                products && products.map(item => <li key={item.id}>
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