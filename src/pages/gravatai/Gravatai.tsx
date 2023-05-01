
import GravataiButtons from '@/components/gravataiButtons/GravataiButtons'
import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

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
            <Image
              src="/gravatai.png"
              alt="Imagem do livro Gravataí"
              width={391}
              height={200}
            />
            <Box sx={{ width: 500, paddingTop: 5, textAlign: 'center', }}>
              <Typography>
                O projeto "Gravataí: entre anjos e gravatás" realizou diversas entrevistas como atividade complementar ao livro, elas podem ser conferidas no nosso canal do Youtube e nas nossas redes sociais Instagram e Facebook.
              </Typography>
              <Box sx={{paddingTop: 5,}}>
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
                <Button
                  sx={{
                    fontSize: 15,
                    backgroundColor: 'secondary.main',
                    color: 'warning.light',
                    width: 150,
                    margin: 1,
                    borderRadius: 3,
                  }}
                  endIcon={< FacebookIcon />}
                >
                  Facebook
                </Button>
                <Button
                  sx={{
                    fontSize: 15,
                    backgroundColor: 'secondary.main',
                    color: 'warning.light',
                    width: 150,
                    margin: 1,
                    borderRadius: 3,
                  }}
                  endIcon={< YouTubeIcon />}
                >
                  Youtube
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>


  )
}

export default Gravatai