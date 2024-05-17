import React, { useState } from 'react'

function InputArraySample() {

    const [name, setName] = useState("") // input state
    const [surname, setsurname] = useState("") // input state
    const [users, setusers] = useState([]) // users array state..
    const [originalUsers, setoriginalUsers] = useState([])

    const addUser = () => {

        //aynı isim, soyisim varsa ekleme
        //filter => where, find => firstOrDefault
        var userObject = users.find(q => q.name == name && q.surname == surname);
        console.log("userObject", userObject)

        if (userObject) {
            alert("Böyle bir kullanıcı mevcut");
            return
        }


        let newUser = {
            name: name,
            surname: surname
        }

        setusers([...users, newUser])
        setoriginalUsers([...originalUsers, newUser])

    }

    const search = (value) => {
        if (value == "")
            setusers(originalUsers)

        let filteredUsers = originalUsers.filter(q => q.name.toLowerCase().includes(value.toLowerCase()) || q.surname.toLowerCase().includes(value.toLowerCase()))

        setusers(filteredUsers)
    }

    return (<>
    <h1>Length: {users.length}</h1>
        <div>
            <label htmlFor="">Name: </label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Surname: </label>
            <input type='text' value={surname} onChange={(e) => setsurname(e.target.value)} />
        </div>
        <div>
            <button onClick={() => addUser()}>Add</button>
        </div>
        <hr />
        <label htmlFor="">Search: </label>
        <input type='text' onChange={(e) => search(e.target.value)} />
        <hr />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Surname</th>
                </tr>
            </thead>
            <tbody>
                {
                    users && users.map((item, index) => <tr key={index}>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                    </tr>)
                }
            </tbody>
        </table>

    </>
    )
}

export default InputArraySample