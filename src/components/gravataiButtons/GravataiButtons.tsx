import React from 'react'
import CardLogo from '@/components/cardLogo/CardLogo'
import { Box, Button, Grid } from '@mui/material'

function GravataiButtons() {
  return (
    <>
      <CardLogo />
      <Grid container spacing={2}>
        <Grid xs={2}>
          <Box sx={{ position: "fixed", paddingTop: 40, display: 'flex', flexDirection: 'column', marginLeft: 2, }}>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 50,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >GRAVATAÍ: entre anjos e gravatás</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 50,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Vídeos e Entrevistas</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 50,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Lugares de Gravataí</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default GravataiButtons