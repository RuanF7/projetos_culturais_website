import { Container, AppBar, Box, Typography, Paper } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import Link from "next/link";


function Footer() {
  return (

    <Box
      sx={{
        bgcolor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '250px',
        marginTop: '2em',
      }}

    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',


        }}
      >
        <Typography sx={{ fontSize: 30, fontWeight: 'bold' }} >
          Siga-me
        </Typography>
        <ExpandCircleDownIcon sx={{ fontSize: 25 }} />
        <Box sx={{ padding: 2, marginTop: 3 }}>
          <a href='mailto:irmastm.pc@gmail.com'
          target="_blank"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}          
          >
            <EmailIcon sx={{ fontSize: 41 }} />
          </a>
          <a href='https://www.facebook.com/projetosculturaisirmastm'
          target="_blank"
          style={{
            textDecoration: 'none',
            color: 'black',
          }} 
          >
            <FacebookIcon sx={{ fontSize: 40, marginLeft: 1 }} />
          </a>
          <a href='https://www.instagram.com/projetosculturaisirmastm'
          target="_blank"
          style={{
            textDecoration: 'none',
            color: 'black',
          }} 
          >
            <InstagramIcon sx={{ fontSize: 40, marginLeft: 1 }} />
          </a>

        </Box>
        <Typography sx={{ fontWeight: 'bold' }}>
          © 2021 por Irmãs TM - Projetos Culturais
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer