import React, { useState } from 'react'

function BasicArrayStateSample() {

    const [countries, setcountries] = useState(["Türkiye", "Japonya", "İran", "Rusya", "Almanya"])


    const addCountry = () => {
        //Yunanistan
        setcountries([...countries, "Yunanistan"])
    }

    return (<>

        <h1>Countries Length: {countries.length}</h1>
        {
            countries.map(item => <li>{item}</li>)
        }

        <button onClick={() => setcountries([])}>Empty</button>
        <button onClick={() => addCountry()}>Add Country</button>

    </>
    )
}

export default BasicArrayStateSample




// var names = ["Çağatay", "Ayça"]

// var newNames = [...names, "Kemal"]

// var newNames2 = ["Ali", ...names]