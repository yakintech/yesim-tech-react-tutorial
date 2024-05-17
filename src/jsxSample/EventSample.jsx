import React from 'react'

function EventSample() {

    const hello = () => {
        console.log("Hello")
    }

    const calc = (x, y) => {
        alert(x * y)
    }

    return (<>
        <button onClick={hello}>Hello Reactjs</button>
        <button onClick={() => hello()}>Hello Reactjs-2</button>
        <button onClick={() => calc(10, 20)}>Calc</button>
    </>
    )
}

export default EventSample