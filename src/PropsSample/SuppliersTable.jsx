import React from 'react'

function SuppliersTable({ suppliers, deleteSupplier, empty }) {

  console.log("SuppliersTable rendered!")

  return (<>
    <h1>Length: {suppliers.length}</h1>
    <button onClick={() => empty()}>Empty</button>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th>City</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          suppliers && suppliers.map(item => <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.companyName}</td>
            <td>{item.contactName}</td>
            <td>{item.address?.city}</td>
            <td><button onClick={() => deleteSupplier(item.id)}>Delete</button></td>

          </tr>)
        }
      </tbody>
    </table>
  </>
  )
}

export default SuppliersTable