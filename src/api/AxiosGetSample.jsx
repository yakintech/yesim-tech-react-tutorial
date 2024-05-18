import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'


function AxiosGetSample() {

    const [customers, setcustomers] = useState([])

    let controller;
    useEffect(() => {
        loadData()

        return () => {
            controller.abort();
        }
    }, [])

    const loadData = () => {

        controller = new AbortController();


        axiosInstance.get("customers", {
            signal: controller.signal
        })
            .then(res => {
                console.log("Response ", res);
                setcustomers(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    //GET, POST, PUT, DELETE

    const deleteCustomer = (id) => {
        axiosInstance.delete(`customers/${id}`)
            .then(res => {
                loadData()
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (<>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    customers.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td><button onClick={() => deleteCustomer(item.id)}>Delete</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>)
}

export default AxiosGetSample