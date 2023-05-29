import SpmgButtons from '@/components/spmgButtons/SpmgButtons'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import styles from './Spmg.module.css'
import BackToTopButton from '@/components/backToTopButton/BackToTopButton'

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
          <Box sx={{display: 'flex',backgroundColor: 'secondary.main', width: 584, height: 30}}>
            <Typography
              sx={{
                fontSize: 20,
                display: 'flex',
                fontFamily: 'Open-sans',
                textAlign: 'left',
                marginRight: 54,
                color: 'primary.main',
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
            backgroundColor: 'primary.main',
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
              Exposição virtual que apresenta a trajetória do Sindicato dos Trabalhadores em Educação Pública Municipal de Gravataí – SPMG.
              Projeto contemplado e financiado com recursos da Lei Federal 14.017/2020 - Lei Aldir Blanc em Gravataí/RS. Edital Prêmio Ocupação de Território 011/2020.
            </Typography>

            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              Aqui encontram-se objetos das campanhas realizadas pelo sindicato: camisetas, cartazes, adesivos, fotografias das manifestações, exemplares originais dos jornais “O Caleidoscópio”, entre outros itens desenvolvidos e/ou preservados pela instituição desde 1988.

            </Typography>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'left',
                textIndent: 20,
              }}>
              Lembramos que nenhum direito é adquirido, eles são conquistas. Foram conquistados por meio de lutas, do empenho e da dedicação de diversos profissionais que fazem parte dessa e de tantas outras histórias, por isso SPMG é mais do que nunca: uma história de luta.
            </Typography>
          </Box>
          <Box>
            <a href='https://www.youtube.com/watch?v=atgnSDcJ46c'
              target="_blank">
              <Image src='/imagensSPMG/helenaVideo.webp'
                alt="Imagem do Video Apresentação do projeto"
                width={700}
                height={400} />
            </a>
          </Box>
          <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', marginTop: 20, }}></Box>
          <Box sx={{ marginTop: 20 }}>
            <Image src='/imagensSPMG/postagensSPMG.webp'
              alt="Imagem do Video Apresentação do projeto"
              width={400}
              height={400}
            />
          </Box>
          <Box className={styles.gridButtons}>            
              <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'secondary.main',
                  color: 'warning.light',
                  width: 250,
                  margin: 1,
                  borderRadius: 3
                }}
              >Linha do tempo</Button>
              <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'secondary.main',
                  color: 'warning.light',
                  width: 250,
                  margin: 1,
                  borderRadius: 3,
                }}
              >Fotos</Button>
              <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'primary.main',
                  color: 'warning.main',
                  width: 250,
                  margin: 1,
                  borderRadius: 3,
                }}
              >História Impressa</Button>
              <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'primary.main',
                  color: 'warning.main',
                  width: 250,
                  margin: 1,
                  borderRadius: 3,
                }}
              >Depoimentos</Button>
              <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'info.main',
                  color: 'warning.light',
                  width: 250,
                  margin: 1,
                  borderRadius: 3,
                }}
              >Campanhas</Button>
              <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'info.main',
                  color: 'warning.light',
                  width: 250,
                  margin: 1,
                  borderRadius: 3,
                }}
              >E a luta continua</Button>       
            </Box>
            <Button
                sx={{
                  fontSize: 20,
                  backgroundColor: 'secondary.main',
                  color: 'warning.light',
                  width: 250,
                  margin: 1,
                  borderRadius: 3,
                }}
              >Publicações</Button>
          </Box>
          <BackToTopButton/>
        </Box>
    </> 
  )
}

export default Spmg