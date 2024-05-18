import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'

function AxiosMultiCall() {

    const [products, setproducts] = useState([])
    const [categories, setcategories] = useState([])


    useEffect(() => {

        let productsResult = axiosInstance.get("products")
        let categoriesResult = axiosInstance.get("categories")

        Promise.all([productsResult, categoriesResult])
            .then(res => {
                console.log("Response", res);
            })
            .catch(err => {
                console.log("Error", err);
            })


    }, [])



    return (<>

    </>
    )
}

export default AxiosMultiCall