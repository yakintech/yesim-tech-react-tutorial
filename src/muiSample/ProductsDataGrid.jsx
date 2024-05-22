import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import { DataGrid } from '@mui/x-data-grid';
import { trTR } from '@mui/material/locale';


function ProductsDataGrid() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts();
    }, [])


    const columns = [
        {
            field: "id", // js objede karşılık gelecek property adı
            headerName: "Product ID", //Grid kolonun başlığı (istediğimizi yazabiliriz)
            width: 150
        },
        {
            field: "name",
            headerName: "Name",
            width: 250,
            renderCell: (params) => {
                return <strong style={{color:'red'}}>{params.value.toUpperCase()}</strong>
            }
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            width: 150
        }
    ]


    const loadProducts = () => {
        axiosInstance.get("products")
            .then(res => {
                setproducts(res.data)
            })
    }

    return (<>
        <div style={{ height: 600, width: '100%' }}>
            <DataGrid
                rows={products}// data source
                columns={columns}
                localeText={trTR}
            />
        </div>

    </>)
}

export default ProductsDataGrid