import BackToTopButton from "@/components/backToTopButton/BackToTopButton"
import CardLogo from "@/components/cardLogo/CardLogo"
import { Box, Button, Typography } from "@mui/material"
import styles from '../../styles/Home.module.css'


const Homepage = () => {
  return (
    <>
      <CardLogo />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        <Box >
          <Typography className={styles.irmastm}
            sx={{
              fontSize: 70,
              display: 'flex',
              fontFamily: 'HeyAugust',
              justifyContent: 'center',
              paddingTop: 10,
              color: 'secondary.main'
            }}
          >Irmãs TM
          </Typography>
          <Box sx={{
            display: 'flex',
            fontFamily: 'HeyAugust',
            justifyContent: 'center',
            backgroundColor: 'info.main',
            color: 'warning.light',
            borderRadius: 5,
          }}>
            <Typography className="irmastm"
              sx={{
                fontSize: 50
              }}
            >Projetos culturais
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
                backgroundColor: 'secondary.main',
                color: 'warning.light',
                width: 250,
                margin: 1,
                borderRadius: 3
              }}
            >As Irmãs TM</Button>
            <Button
              sx={{
                fontSize: 20,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                margin: 1,
                borderRadius: 3,
              }}
            >Contato</Button>
            <Button
              sx={{
                fontSize: 20,
                backgroundColor: 'info.main',
                color: 'secondary.main',
                width: 250,
                margin: 1,
                borderRadius: 3,
              }}
            >Livro Ceci</Button>
            <Button
              sx={{
                fontSize: 20,
                backgroundColor: 'primary.main',
                color: 'warning.main',
                width: 250,
                margin: 1,
                borderRadius: 3,
              }}
            >Livro Gravataí</Button>
            <Button
              sx={{
                fontSize: 20,
                backgroundColor: 'secondary.main',
                color: 'warning.light',
                width: 250,
                margin: 1,
                borderRadius: 3,
              }}
            >Exposição SPMG
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: 'warning.main',
              width: 400,
              margin: 15,
            }}>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Página destinada a divulgação dos projetos culturais realizados por Carolina TM, artista visual, e Helena Thomassim Medeiros, museóloga, mestre em Memória Social e Patrimônio Cultural.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: 'warning.main',
              width: 400,
              margin: 15,
            }}>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Nos siga nas redes sociais para acompanhar nossa jornada!
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: 'warning.main',
              width: 400,
              margin: 15,
            }}>
            <Typography
              sx={{
                fontSize: 20,
                textAlign: 'center',
              }}
            >
              Futuras fotos do instagram
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

export default Homepage