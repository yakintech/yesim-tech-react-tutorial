import React, { useEffect, useState } from 'react'

function EffetSample() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setproducts(data)
                console.log("Data Çekildi")
            })
    }, [])

    return (<>
        <ul>
            {
                products.map(item => <li key={item.id}>{item.name}</li>)
            }
        </ul>
    </>)
}

export default EffetSample