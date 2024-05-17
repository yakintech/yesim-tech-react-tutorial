import React, { useState } from 'react'

function CounterSample() {

    console.log("Counter sample component rendered!")

    //number, string, object, object array
    const [counter, setCounter] = useState(0)


    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(20)}>Increase Counter</button>
    </>
}

export default CounterSample
