import React, { useState } from 'react'

function TooManyRender() {

    const [counter, setcounter] = useState(0)


    var randomNumber = Math.floor(Math.random() * 1000);

    //setcounter(randomNumber)


    return (<>
        <h1>Counter: {counter}</h1>
    </>)
}

export default TooManyRender