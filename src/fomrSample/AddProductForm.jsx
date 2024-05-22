import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { addProductSchema } from './addProducrSchema'


function AddProductForm() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(addProductSchema),
    })

    const addProduct = (values) => {

    }

    return (<>
        <form onSubmit={handleSubmit(addProduct)}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' {...register("name")} />
                <p style={{ color: 'red' }}>{errors.name?.message}</p>
            </div>
            <div>
                <label htmlFor="">Unit Price</label>
                <input type='text' {...register("unitPrice")} />
                <p style={{ color: 'red' }}>{errors.unitPrice?.message}</p>
            </div>
            <div>
                <label htmlFor="">Units In Stock</label>
                <input type='text' {...register("unitsInStock")} />
                <p style={{ color: 'red' }}>{errors.unitsInStock?.message}</p>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </>
    )
}

export default AddProductForm