import React from 'react'

function MapSample() {

    let cities = ["İzmir", "Bursa", "İstanbul", "Ankara"]

    return (<>
        <ul>
            {
                cities.map(item => <li>{item}</li>)
            }
        </ul>
    </>)
}

export default MapSample