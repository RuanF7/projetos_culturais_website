import GravataiButtons from '@/components/gravataiButtons/GravataiButtons'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import BackToTopButton from '@/components/backToTopButton/BackToTopButton';

function Gravatai() {
  return (
    <>
      <GravataiButtons />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginLeft: 10,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
          }}
        >
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
                  }}
                >
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
                  Projeto executado através do Edital Criação e Formação Diversidade das Culturas realizado com recursos da Lei Aldir Blanc nº 14.017/20
                </Typography>
              </Box>
              <Box sx={{ paddingTop: 15 }} >
                <Typography sx={{ fontSize: 30 }} >
                  PDF  do livro "Gravataí: entre anjos e gravatás"
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 5,
                  }}
                >
                  <Image
                    src="/livroGravatai.png"
                    alt="Imagem do livro Gravataí"
                    width={413}
                    height={377}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                    <Box>
                      <a href='https://967d34da-3410-43bb-b5c5-6b045bd84bfc.filesusr.com/ugd/3d8a5a_26561903ce9e47fbb6db157d0fd20c73.pdf'
                        target="_blank"
                        style={{
                          textDecoration: 'none',
                          color: 'black'
                        }}
                      >
                        <PictureAsPdfIcon sx={{ fontSize: 40, paddingTop: 5 }} />
                      </a>
                      <Typography>
                        PDF atualizado do livro
                      </Typography>
                    </Box>

                    <Box sx={{ marginLeft: 10 }}>
                      <a href='https://967d34da-3410-43bb-b5c5-6b045bd84bfc.filesusr.com/ugd/3d8a5a_a0c1dba1195048bbb00a2ffd657b435c.pdf'
                        target="_blank"
                        style={{
                          textDecoration: 'none',
                          color: 'black'
                        }}
                      >
                        <PictureAsPdfIcon sx={{ fontSize: 40, paddingTop: 5 }} />
                      </a>
                      <Typography>
                        PDF original do livro
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ paddingTop: 15 }}>
                <Typography sx={{ fontSize: 30 }} >
                  Áudio livro"Gravataí: entre anjos e gravatás"
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 5,
                  }}
                >
                  <Image
                    src="/livroAudio.png"
                    alt="Imagem do livro Gravataí"
                    width={413}
                    height={233}
                  />
                  <a href='https://www.youtube.com/watch?v=F2CxHw1J_NM'
                    target="_blank"
                    style={{
                      textDecoration: 'none',
                      
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: 50, paddingTop: 5, color: 'secondary.dark' }} />
                  </a>
                </Box>
              </Box>
              <Box sx={{ paddingTop: 15 }} >
                <Typography sx={{ fontSize: 30 }} >
                  Apresentação - História de Gravataí
                  Projeto "Gravataí: entre anjos e gravatás"
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 5,
                  }}
                >
                  <Image
                    src="/historiaG.png"
                    alt="Imagem do livro Gravataí"
                    width={413}
                    height={233}
                  />
                  <a href='https://967d34da-3410-43bb-b5c5-6b045bd84bfc.filesusr.com/ugd/3d8a5a_b8aabbca4fef49cb949adc571242e000.pdf'
                    target="_blank"
                    style={{
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    <PictureAsPdfIcon sx={{ fontSize: 40, paddingTop: 5 }} />
                  </a>
                </Box>
              </Box>
              <Box sx={{ paddingTop: 15 }} >
                <Typography sx={{ fontSize: 30 }}>
                  Apresentação - Museu e Arquivo Municipal
                  Projeto "Gravataí: entre anjos e gravatás"
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: 5,
                  }}
                >
                  <Image
                    src="/museuMu.png"
                    alt="Imagem do livro Gravataí"
                    width={413}
                    height={233}
                  />
                  <a href='https://967d34da-3410-43bb-b5c5-6b045bd84bfc.filesusr.com/ugd/3d8a5a_df1ce003f4b44c65b647a98a500fdfe6.pdf'
                    target="_blank"
                    style={{
                      textDecoration: 'none',
                      color: 'black'
                    }}
                  >
                    <PictureAsPdfIcon sx={{ fontSize: 40, paddingTop: 5 }} />
                  </a>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <BackToTopButton/>
      </Box >
    </>


  )
}

export default Gravatai