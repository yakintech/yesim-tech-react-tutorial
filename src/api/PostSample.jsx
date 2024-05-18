import React, { useEffect, useState } from 'react'

function PostSample() {
    const [name, setName] = useState("")
    const [description, setdescription] = useState("")

    const [products, setproducts] = useState([])


    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                setproducts(data)
            })
    }

    const addProduct = () => {
        let newProduct = {
            name,
            description
        }

        fetch("https://northwind.vercel.app/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("Data ", data);
                loadProducts();
                //JSON.stringfy JS => JSON
                //JSON.Parse JSON => JS
            })


    }

    return (<>
        <div>
            <label htmlFor="">Name</label>
            <input type='text' onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Description</label>
            <input type='text' onChange={(e) => setdescription(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addProduct()}>Add</button>
        </div>

        <hr />
        {
            products && products.map(item => <li key={item.id}>{item.name}</li>)
        }
    </>
    )
}

export default PostSample