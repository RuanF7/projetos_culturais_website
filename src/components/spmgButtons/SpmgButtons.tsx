import React from 'react'
import CardLogo from '@/components/cardLogo/CardLogo'
import { Box, Button, Grid } from '@mui/material'

function SpmgButtons() {
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
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Exposição SPMG</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Linha do Tempo</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >História Impressa</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Campanhas</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Fotos</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Depoimentos</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >Postagens</Button>
            <Button
              sx={{
                fontSize: 12,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                height: 40,
                margin: 1,
                borderRadius: 3,
                border: 2,
              }}
            >E a luta continua</Button>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default SpmgButtons