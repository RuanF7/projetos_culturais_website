import GravataiButtons from '@/components/gravataiButtons/GravataiButtons'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import BackToTopButton from '@/components/backToTopButton/BackToTopButton';

function Lugares() {
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
                O projeto "Gravataí: entre anjos e gravatás" apresentou como atividade complementar ao livro uma série de vídeos e entrevistas, além disso foram feitas postagens sobre lugares de Gravataí, estas pesquisas foram publicadas nas redes sociais da iniciativa "Projetos Culturais Irmãs TM"              </Typography>
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
                  Projeto executado através do Edital Criação e Formação Diversidade das Culturas realizado com recursos da Lei Aldir Blanc nº 14.017/20 <br /> <br /> Clique nas imagens e confira!!
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
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CPbsDKspcY5/'
                    target="_blank">
                    <Image src='/imagensLugares/capelaSantaCruz.webp'
                      alt="Imagem da Capela Santa Cruz"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CPttncZL6JM/'
                    target="_blank">
                    <Image src='/imagensLugares/igrejaMatriz.webp'
                      alt="Imagem da Igreja Matriz"
                      width={474}
                      height={476} />
                  </a>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CP_vG-kBkuI/'
                    target="_blank">
                    <Image src='/imagensLugares/prefeituraMunicipal.webp'
                      alt="Imagem da Prefeitura Municipal"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CQRwrD9NrEo/'
                    target="_blank">
                    <Image src='/imagensLugares/rioGravatai.webp'
                      alt="Imagem do Rio Gravataí"
                      width={474}
                      height={476} />
                  </a>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CQi7SwTH8UB/'
                    target="_blank">
                    <Image src='/imagensLugares/casaraoDosFonseca.webp'
                      alt="Imagem do Casarão dos Fonseca"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CQ089Nvr_0G/'
                    target="_blank">
                    <Image src='/imagensLugares/colegioBarbosa.webp'
                      alt="Imagem do Colégio Barbosa Rodrigues"
                      width={474}
                      height={476} />
                  </a>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CRG-dCUrnFy/'
                    target="_blank">
                    <Image src='/imagensLugares/fonteDoForno.webp'
                      alt="Imagem da Fonte do Forno"
                      width={474}
                      height={476}/>
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CRZAC58tsKr/'
                    target="_blank">
                    <Image src='/imagensLugares/museuAgostinhoMartha.webp'
                      alt="Imagem do Museu Agostinho Martha"
                      width={474}
                      height={476} />
                  </a>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CRr4ksXtxY7/'
                    target="_blank">
                    <Image src='/imagensLugares/ctgAldeiaDosAnjos.webp'
                      alt="Imagem do CTG Aldeia dos Anjos"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CR96EX1tpe2/'
                    target="_blank">
                    <Image src='/imagensLugares/colegioDomFeliciano.webp'
                      alt="Imagem do Colégio Dom Feliciano"
                      width={474}
                      height={476} />
                  </a>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CSPIODPMtsJ/'
                    target="_blank">
                    <Image src='/imagensLugares/cemiterioMunicipal.webp'
                      alt="Imagem do Cemitério Municipal"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CShJsPDNQNm/'
                    target="_blank">
                    <Image src='/imagensLugares/quiosqueDaCultura.webp'
                      alt="Imagem do Quiosque da Cultura"
                      width={474}
                      height={476} />
                  </a>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CSz-xZgLa7s/'
                    target="_blank">
                    <Image src='/imagensLugares/casaraoDosBina.webp'
                      alt="Imagem do Casarão ds Bina"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CTGAWbgpxbB/'
                    target="_blank">
                    <Image src='/imagensLugares/clube6DeMaio.webp'
                      alt="Imagem do Clube Social Seis de Maio"
                      width={474}
                      height={476} />
                  </a>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 5}}>
                  <a href='https://www.instagram.com/p/CTam2oSlpTL/'
                    target="_blank">
                    <Image src='/imagensLugares/bibliotecaMunicipal.webp'
                      alt="Imagem da Biblioteca Municipal"
                      width={474}
                      height={476} />
                  </a>
                  <Box sx={{ borderRight: 2, borderColor: 'secondary.dark', height: 426, display: 'flex', alignSelf: 'flex-start', marginLeft: 1, marginRight: 1  }}></Box>
                  <a href='https://www.instagram.com/p/CTqKT5ehkNE/'
                    target="_blank">
                    <Image src='/imagensLugares/cineTeatro.webp'
                      alt="Imagem do Cine Teatro"
                      width={474}
                      height={476} />
                  </a>
                </Box>
                <Box sx={{ borderBottom: 2, borderColor: 'secondary.dark', width: 700, display: 'flex', alignSelf: 'center' }}></Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <BackToTopButton />
      </Box >
    </>)
}

export default Lugares