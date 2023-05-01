import GravataiButtons from '@/components/gravataiButtons/GravataiButtons'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BackToTopButton from '@/components/backToTopButton/BackToTopButton';

function VideosEEntrevistas() {
  return (
    <>
      <GravataiButtons />
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
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Image
                src="/gravatai.png"
                alt="Imagem do livro Gravataí"
                width={391}
                height={200}
              />
            </Box>
            <Box sx={{ width: 500, paddingTop: 5, textAlign: 'center', }}>
              <Typography>
                O projeto "Gravataí: entre anjos e gravatás" realizou diversas entrevistas como atividade complementar ao livro, elas podem ser conferidas no nosso canal do Youtube e nas nossas redes sociais Instagram e Facebook.
              </Typography>
              <Box sx={{ paddingTop: 5, }}>
                <a href='https://www.instagram.com/projetosculturaisirmastm'
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                  }}>
                  <Button
                    sx={{
                      fontSize: 15,
                      backgroundColor: 'secondary.main',
                      color: 'warning.light',
                      width: 150,
                      margin: 1,
                      borderRadius: 3,
                    }}
                    endIcon={< InstagramIcon sx={{ size: 'large' }} />}
                  >
                    Instagram
                  </Button>
                </a>
                <a href='https://www.facebook.com/projetosculturaisirmastm'
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Button
                    sx={{
                      fontSize: 15,
                      backgroundColor: 'info.dark',
                      color: 'warning.dark',
                      width: 150,
                      margin: 1,
                      borderRadius: 3,
                    }}
                    endIcon={< FacebookIcon />} >
                    Facebook
                  </Button>
                </a>
                <a href='https://www.youtube.com/watch?v=F2CxHw1J_NM'
                  target="_blank"
                  style={{
                    textDecoration: 'none',
                  }}
                >
                  <Button
                    sx={{
                      fontSize: 15,
                      backgroundColor: 'secondary.dark',
                      color: 'warning.light',
                      width: 150,
                      margin: 1,
                      borderRadius: 3,
                    }}
                    endIcon={< YouTubeIcon />}
                  >
                    Youtube
                  </Button>
                </a>
              </Box>
              <Box sx={{ paddingTop: 5 }}>
                <Typography>
                  Para facilitar o acesso colocamos abaixo as capas destas lives vinculadas ao nosso canal, é só clicar e assistir! Projeto executado através do Edital Criação e Formação Diversidade das Culturas realizado com recursos da Lei Aldir Blanc nº 14.017/20
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: 10,
                }}>
                <a href='https://www.youtube.com/watch?v=BamY-bPeKmE'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/angelaXavierVideo.webp'
                    alt="Imagem do Video da Entrevista Angela Xavier"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=RMgoEYRr2eE'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/matheusDiasVideo.webp'
                    alt="Imagem do Video da Entrevista Matheus DIas"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=SfYQcE_HM4Y'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/waldemarMaxVideo.webp'
                    alt="Imagem do Video da Entrevista Waldemar Max"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=PTBDI0_xyxc'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/bibliotecaMunicipalVideo.webp'
                    alt="Imagem do Video da Entrevista Biblioteca Municipal"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=TMHfE21rAvQ'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/quiosqueDaCulturaVideo.webp'
                    alt="Imagem do Video da Entrevista Quiosque da Cultura"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=g9FKOQmeBN8'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/amonDaCostaVideo.webp'
                    alt="Imagem do Video da Entrevista Amon da Costa"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=uU2PVdvPa8M'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/cristianeGomesVideo.webp'
                    alt="Imagem do Video da Entrevista Cristiane Gomes"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=_bDZLj1APw4'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/projetoCidadeHistoricaVideo.webp'
                    alt="Imagem do Video da Entrevista Projeto Cidade Histórica"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=N0-EHyYLRGI'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/museuAgostinhoMarthaVideo.webp'
                    alt="Imagem do Video da Entrevista Museu Agostinho Martha"
                    width={700}
                    height={400} />
                </a>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center', margin: 5 }}></Box>
                <a href='https://www.youtube.com/watch?v=atgnSDcJ46c'
                  target="_blank">
                  <Image src='/imagensVideosEEntrevistas/historiaDeGravataiVideo.webp'
                    alt="Imagem do Video da Entrevista História de Gravataí"
                    width={700}
                    height={400} />
                </a>
              </Box>
            </Box>
          </Box>
        </Box>
        <BackToTopButton/>
      </Box >
    </>
  )
}

export default VideosEEntrevistas