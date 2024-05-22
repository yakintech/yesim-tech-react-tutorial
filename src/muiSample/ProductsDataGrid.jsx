import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import { DataGrid } from '@mui/x-data-grid';
import { Button, CircularProgress } from '@mui/material';


function ProductsDataGrid() {

    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        loadProducts();
    }, [])


    const deleteProduct = (id) => {
        setloading(true)

        const confirm = window.confirm("Are u sure?")

        if (!confirm) {
            setloading(false)
            return
        }
        axiosInstance.delete("products/" + id)
            .then(res => {
                loadProducts();
            })

    }


    const columns = [
        {
            field: "id", // js objede karşılık gelecek property adı
            headerName: "Product ID", //Grid kolonun başlığı (istediğimizi yazabiliriz)
            width: 150
        },
        {
            field: "name",
            headerName: "Name",
            width: 250
        },
        {
            field: "unitPrice",
            headerName: "Unit Price",
            width: 150
        },
        {
            field: "companyName",
            headerName: "Company Name",
            width: 150,
            renderCell: item => <>{item.row.supplier?.companyName}</>
        },
        {
            field: "delete",
            headerName: "Delete",
            width: 150,
            renderCell: item => <Button variant="contained" color="error" onClick={() => deleteProduct(item.row.id)}>Delete</Button>
        }
    ]


    const loadProducts = () => {
        setTimeout(() => {
            axiosInstance.get("products")
                .then(res => {
                    setproducts(res.data)
                    setloading(false)
                })
                .catch(err => {
                    alert("Error!")
                    setloading(false)
                })
        }, 2000); //loading gözükmesi için ekledim
    }

    return (<>
        {
            loading ? <CircularProgress /> : <div style={{ height: 600, width: '100%' }}>
                <DataGrid
                    rows={products}// data source
                    columns={columns}
                    loading={loading}
                />
            </div>
        }


    </>)
}

export default ProductsDataGrid