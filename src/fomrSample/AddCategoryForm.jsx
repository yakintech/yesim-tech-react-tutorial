import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { axiosInstance } from '../config/axiosInstance'

function AddCategoryForm() {

    const [display, setdisplay] = useState(true)

    const {
        register,
        handleSubmit,
        formState: { errors, submitCount, isSubmitted, validatingFields }
    } = useForm()

    const addCategory = (values) => {
        // axiosInstance.post("categories", values)
        //     .then(res => {
        //         console.log("Response: ", res)
        //         alert("Category başarıyla eklendi!")
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }


    return (<>
        {
            isSubmitted ? <h1>Form gönderildi...</h1> : <></>
        }
        <form onSubmit={handleSubmit(addCategory)}>
            <div>
                <label htmlFor="">Name</label>
                <input type='text' {...register("name", { required: true })} />
                {errors.name && <span style={{ color: 'red' }}>Bu alan boş geçilemez!</span>}
            </div>
            <div>
                <label htmlFor="">Description</label>
                <input type='text' {...register("description")} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    </>)
}

export default AddCategoryForm