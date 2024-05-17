import React from 'react'

function OneWayBinding() {

  let name = "Çağatay"
  let country = "Türkiye"
  var onlineStatus = false
  var pElement = <p>lorem ipsum</p>
  

  return (<>
    <h1>Name: {name.toUpperCase()}</h1>
    <h1>Country: {country.toUpperCase()}</h1>

    {
        onlineStatus == true ? <h1>User Online!</h1>: <h1>User Offline</h1>
    }

    {pElement}

  </>
  )
}

export default OneWayBinding
