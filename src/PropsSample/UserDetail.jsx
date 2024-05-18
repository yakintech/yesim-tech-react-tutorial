import React from 'react'

function UserDetail(props) {

    const {name, surname, country, age, points} = props
    
    return (<>
        <h1>Name:{name}</h1>
        <h1>Surname: {surname}</h1>
        <h1>Country: {country}</h1>
        <h1>Age: {age}</h1>

        <hr />
        <ul>
            {
                points.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default UserDetail


var props = {}