import React, { useState } from 'react'
import SuppliersSearch from './SuppliersSearch'
import SuppliersTable from './SuppliersTable'
import { suppliersData } from '../data/suppliersData'

function SuppliersPage() {
    
    const [suppliers, setsuppliers] = useState(suppliersData)

    const deleteSupplier = (id) => {
        let filteredSuppliers = suppliers.filter(q => q.id != id)
        setsuppliers(filteredSuppliers)
    }

    const empty = () => {
        setsuppliers([])
    }

  return (<>
    <SuppliersSearch suppliers={suppliers}/>
    <SuppliersTable suppliers={suppliers} deleteSupplier={deleteSupplier} empty={empty}/>
  </>
  )
}

export default SuppliersPage