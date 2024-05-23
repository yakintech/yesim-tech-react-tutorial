import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { axiosInstance } from '../config/axiosInstance';
import { queryClient } from '..';
import { useMutation } from '@tanstack/react-query';

function ReactQueryIntro() {

    const [name, setname] = useState("")
    const [unitPrice, setunitPrice] = useState(0)

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const response = await axiosInstance.get("products");
            return response.data;
        },
        // interval fetch data every 5 seconds
        //refetchInterval: 5000,

        staleTime: 20000,
    })

    const clearCache = () => {
        queryClient.invalidateQueries('products')
    }

    const postProductMutation = useMutation({
        mutationFn: async (newProduct) => {
            const response = await axiosInstance.post("products", newProduct);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries('products')
        },
        onError: (error) => {
            console.log(error)
        }
    })

    const add = () => {
      
        postProductMutation.mutate({ name, unitPrice })
    }

    console.log("postProductMutation", postProductMutation);

    return (<>
  
        <button onClick={clearCache}>Clear Cache</button>

        <hr />
        <div>
            <label htmlFor="">Name</label>
            <input type='text' onChange={(e) => setname(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Unit Price</label>
            <input type='text' onChange={(e) => setunitPrice(e.target.value)} />
        </div>
        <div>
            <button onClick={add}>Add</button>
        </div>

        {
            isLoading ? <h1>loading...</h1> : <>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(item => <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.unitPrice}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </>
        }
    </>
    )
}

export default ReactQueryIntro