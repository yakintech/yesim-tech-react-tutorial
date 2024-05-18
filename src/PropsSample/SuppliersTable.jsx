import React from 'react'

function SuppliersTable(props) {
  
  return (<>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Company Name</th>
            <th>Contact Name</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {
            props.suppliers && props.suppliers.map(item => <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.companyName}</td>
              <td>{item.contactName}</td>
              <td>{item.address.city}</td>

            </tr>)
          }
        </tbody>
      </table>
  </>
  )
}

export default SuppliersTable