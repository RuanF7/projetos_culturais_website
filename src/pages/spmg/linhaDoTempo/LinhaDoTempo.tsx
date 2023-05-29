import SpmgButtons from '@/components/spmgButtons/SpmgButtons'
import { Box, Typography } from '@mui/material'
import React from 'react'

function LinhaDoTempo() {
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
          <Box sx={{ backgroundColor: 'secondary.main', width: 584, height: 30 }}>

          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'primary.main',
            width: 584,
          }}>
            <Typography className="irmastm"
              sx={{
                fontSize: 70,
                display: 'flex',
                fontFamily: 'HeyAugust',
                textAlign: 'center',
                paddingTop: 2,
                color: 'secondary.main'
              }}
            >Linha do Tempo do SPMG
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'warning.main',
              width: 500,
              margin: 15,
            }}>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              Em 1987 um grupo de professores começou a se reunir e discutir a criação de um sindicato para os trabalhadores do município de Gravataí. Em julho de 1988 foi fundada a Associação dos Professores Municipais de Gravataí (APMG).
              Em dezembro de 1988 o Sindicato dos Professores Municipais de Gravataí (SPMG) foi fundado. Neste período o Brasil discutia a nova constituição, após ter saído de uma ditadura militar (1964-1985).
              </Typography>

            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              No ano de 1996 esta instituição optou por representar todos os trabalhadores em educação da rede municipal, passando a se chamar: Sindicato dos Trabalhadores em Educação Pública Municipal de Gravataí, entretanto, mantiveram a sigla inicial. Atualmente, o SPMG possui mais de mil filiados.
            </Typography>            
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default LinhaDoTempo