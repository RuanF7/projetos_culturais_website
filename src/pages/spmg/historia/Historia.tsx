import SpmgButtons from '@/components/spmgButtons/SpmgButtons'
import { Box, Typography, Button } from '@mui/material'
import React from 'react'
import Image from 'next/image'


function Historia() {
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
            >História Impressa
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              color: 'warning.main',
              width: 800,
              marginTop: 15,
              marginBottom: 10,
            }}>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              Em 1988 o SPMG começou a publicar um boletim periódico. A finalidade era introduzir discussões importantes para a categoria representada pelo sindicato.
              O jornal “O Caleidoscópio” começou a ser produzido em 1994 e passou a ser distribuído nas escolas municipais.<br />
              O acervo das publicações relacionadas ao SPMG foi digitalizado em 2014, durante o projeto “SPMG: 25 Anos de luta Sindical”.<br />
              O design feito “à mão” com uma máquina de escrever, as abordagens bem-humoradas, utilizando assuntos do cotidiano como novelas e horóscopo, nos revelam uma nova faceta da instituição, que transformava a adversidade em uma ferramenta para reforçar laços profissionais e afetivos.<br />
              Muitas das obras eram idealizadas e escritas em conjunto, por isso se torna difícil identificar a autoria. Esse dado também pode ser visto como um ideal construído, onde uma pessoa fazia parte de uma luta de todos.
            </Typography>
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
                color: 'secondary.main',
                width: 300,
                margin: 1,
                borderRadius: 3
              }}
            >Publicações Site SPMG</Button>
          </Box>
          <br />
          <br />
          <br />
          <p>Carrosel de publicações Vindas do Site</p>
          <br />
          <br />
          <br />
          <Box sx={{ paddingTop: 15, }}>
            <a href='https://www.youtube.com/watch?v=22MztHSHaAs'
              target="_blank">
              <Image src='/imagensSPMG/jornaisMarli.webp'
                alt="Imagem do Video Acervo e publicações"
                width={700}
                height={400} />
            </a>
          </Box>
          <br />
          <br />
          <br />
          <p>Criar layout de fotos com apresentação expansiva das imagens</p>
          <br />
          <br />
          <br />
        </Box>
      </Box>
    </>
  )
}

export default Historia