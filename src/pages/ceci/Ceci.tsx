import CardLogo from '@/components/cardLogo/CardLogo'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from './Ceci.module.css'
import BackToTopButton from '@/components/backToTopButton/BackToTopButton';


function Ceci() {
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}>
          <Typography className="irmastm"
            sx={{
              fontSize: 50,
              display: 'flex',
              fontFamily: 'HeyAugust',
              justifyContent: 'center',
              paddingTop: 10,
              color: 'secondary.main',
              textAlign: 'center',
            }}
          >Livro Infantil <br />
            Ceci: a menina que podia voar
          </Typography>
          <Box sx={{ width: 500, paddingTop: 5, }}>
            <Box >

            </Box>
            <Box sx={{ textAlign: 'left' }}>

              <Typography >
                <Image
                  className={styles.imagem}
                  src="/imagensCeci/ceci.webp"
                  alt="Imagem do livro Gravataí"
                  width={150}
                  height={200} />
                O projeto consiste na fabricação de um livro infantil, focado em crianças em fase de alfabetização.
                A obra narra a história de Cecília – cujo apelidado é Ceci – uma menina de cinco anos, muito curiosa, que não consegue compreender a chegada de seu irmão mais novo, Joaquim, na família. O conto aborda o elemento  metafórico de que o pensamento nos faz voar. Portanto, com diversos questionamentos em sua mente, devido as novidades trazidas pela presença de mais uma pessoa em sua vida, Ceci consegue voar.Durante sua viagem sobre o planeta Terra ela observa diversos animais e suas relações enquanto grupo, o que faz com que a pequena perceba a importância do novo papel de sua vida: ser uma irmã mais velha.
              </Typography>
            </Box>

          </Box>
        </Box>
        <BackToTopButton/>
      </Box>
    </>


  )
}

export default Ceci