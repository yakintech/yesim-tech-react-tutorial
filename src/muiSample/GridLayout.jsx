import { Grid } from '@mui/material'
import React from 'react'

function GridLayout() {
  return (<>
    <Grid container>
    <Grid item xs={4} sm={6}>
        BOX-1
    </Grid>
    <Grid item xs={4} sm={6}>
        BOX-2
    </Grid>
    <Grid item xs={4} sm={6}>
        BOX-3
    </Grid>

    </Grid>

  </>
  )
}

export default GridLayout