import BackToTopButton from '@/components/backToTopButton/BackToTopButton'
import CardLogo from '@/components/cardLogo/CardLogo'
import { Box, Button, FilledInput, FormControl, Input, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <>
      <CardLogo />
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
            justifyContent: 'center',
            flexDirection: 'column',
            padding: 30,
          }}>
          <Typography
            sx={{
              fontSize: 40,
              display: 'flex',
              justifyContent: 'center',
            }}
          >ENTRE EM CONTATO:</Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
              display: 'flex',
              justifyContent: 'center',
            }}
            noValidate
            autoComplete="off"
          >
            <Box sx={{width: 700}}>              
              <FormControl                
                fullWidth sx={{ m: 1 }}                
              >
                <InputLabel  htmlFor="filled-adornment-amount">Nome</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  
                />
              </FormControl>
              <FormControl
                fullWidth sx={{ m: 1 }}
              >
                <InputLabel htmlFor="filled-adornment-amount">Email</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                />
              </FormControl><FormControl
                fullWidth sx={{ m: 1 }}
              >
                <InputLabel htmlFor="filled-adornment-amount">Telefone</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                />
              </FormControl><FormControl
                fullWidth sx={{ m: 1 }}
              >
                <InputLabel htmlFor="filled-adornment-amount">Digite sua mensagem aqui...</InputLabel>
                <OutlinedInput
                  multiline
                  rows={4}
                  id="outlined-adornment-amount"
                />
              </FormControl>
              
            </Box>
            
          </Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          >
            <Button
              sx={{
                fontSize: 20,
                backgroundColor: 'info.main',
                color: 'warning.light',
                borderRadius: 3,
              }}
            >
              Ver Mais
            </Button>
          </Box>
        </Box>
        <BackToTopButton/>
      </Box>
    </>
  )
}

export default Contact