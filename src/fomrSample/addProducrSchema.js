import * as yup from "yup"


export const addProductSchema = yup.object({
    name: yup.string().required(),
    unitPrice: yup.number().required("Bu alan boş geçilemez").max(100, "100 den büyük bir değer girilemez"),
    unitsInStock: yup.number().required()
})
