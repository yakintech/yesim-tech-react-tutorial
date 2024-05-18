import React, { useState } from 'react'
import SuppliersSearch from './SuppliersSearch'
import SuppliersTable from './SuppliersTable'
import { suppliersData } from '../data/suppliersData'

function SuppliersPage() {
    
    const [suppliers, setsuppliers] = useState(suppliersData)

  return (<>
    <SuppliersSearch suppliers={suppliers}/>
    <SuppliersTable suppliers={suppliers}/>
  </>
  )
}

export default SuppliersPage