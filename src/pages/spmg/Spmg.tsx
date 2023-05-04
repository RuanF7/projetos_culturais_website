import SpmgButtons from '@/components/spmgButtons/SpmgButtons'
import { Box, Typography } from '@mui/material'
import React from 'react'

function Spmg() {
  return (
    <>
      <SpmgButtons />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: 10,
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <Box>
            <Typography
              sx={{
                fontSize: 20,
                display: 'flex',
                fontFamily: 'Open-sans',
                textAlign: 'left',
                paddingTop: 10,
                marginRight: 52,
                color: 'info.main',
                textDecoration: 'underline',
              }}>
              Exposição Virtual
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography className="irmastm"
              sx={{
                fontSize: 70,
                display: 'flex',
                fontFamily: 'HeyAugust',
                paddingTop: 2,
                color: 'secondary.main'
              }}
            >SPMG
            </Typography>
            <Typography className="irmastm"
              sx={{
                fontSize: 70,
                display: 'flex',
                fontFamily: 'HeyAugust',
                justifyContent: 'center',
                color: 'secondary.main'
              }}
            >Uma história de luta
            </Typography>
          </Box>
        </Box>
      </Box>

    </>
  )
}

export default Spmg