import React from 'react'

function UserDetail(props) {

    return (<>
        <h1>Name:{props.name}</h1>
        <h1>Surname: {props.surname}</h1>
        <h1>Country: {props.country}</h1>
        <h1>Age: {props.age}</h1>

        <hr />
        <ul>
            {
                props.points.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default UserDetail


var props = {}