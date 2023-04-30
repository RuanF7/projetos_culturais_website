import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SchoolIcon from '@mui/icons-material/School';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 3,
          }}
        >
          <Box>
            <Avatar
              alt="Logo"
              src="/carolinaTM.png"
              sx={{
                width: 250, height: 220, paddingTop: 10,
              }}
            />
            <Typography
              sx={{
                fontSize: 12,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Carolina Thomassin Medeiros
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <a href='https://www.linkedin.com/in/carolina-tm-984462105/'
                target="_blank"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <LinkedInIcon
                  sx={{
                    fontSize: 40,
                  }} />
              </a>
            </Box>
          </Box>

          <Typography
            sx={{
              fontSize: 20,
              display: 'flex',
              fontFamily: 'HeyAugust',
              justifyContent: 'center',
              paddingTop: 16,
              paddingLeft: 5,
              width: 700,
              color: 'warning.main'
            }}
          >
            Bacharel em Artes Visuais
            Atua com pintura, ilustração digital, design e diagramação, realizou trabalhos para exposições coletivas com as mais diversas técnicas.
            Em 2019 foi uma das fundadoras da Revista de Arte Abacaxi com Morango, onde diversos artistas se unem em uma publicação para tratar de temas como preconceito, feminismo, homofobia, etc.
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              display: 'flex',
              fontFamily: 'HeyAugust',
              justifyContent: 'center',
              paddingTop: 16,
              width: 700,
              color: 'warning.main'
            }}
          >
            Museóloga, mestre em Memória Social e Patrimônio Cultural
            Possui experiência com pesquisa, monitoria, docência, rotinas administrativas e projetos culturais.Atualmente assessora, escreve e atua em diversos projetos culturais, envolvendo temáticas vinculadas a memória, patrimônio, artes visuais e lutas sociais.
          </Typography>
          <Box>
            <Avatar
              alt="Logo"
              src="/helenaTM.png"
              sx={{
                width: 250, height: 220, paddingTop: 10,
              }}
            />
            <Typography
              sx={{
                fontSize: 12,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              Helena Thomassin Medeiros 
            </Typography>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            >
              <a href='https://www.linkedin.com/in/helena-medeiros-2ba829181/'
                target="_blank"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
              <LinkedInIcon
                sx={{
                  fontSize: 40,
                }}
              />
              </a>
              <a href='http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K8012667Y9'
                target="_blank"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
              <SchoolIcon
                sx={{
                  fontSize: 40,
                  paddingLeft: 2,
                }}
              />
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutUs