import React, { useState } from 'react'

function VirtualDomSample() {

    const [counter, setcounter] = useState(0)

    console.log("Component rendered!")

    return (<>
        <h1>Counter: {counter}</h1>
        <hr />
        <button onClick={() => setcounter(counter + 1)}>Change</button>
    </>)
}

export default VirtualDomSample