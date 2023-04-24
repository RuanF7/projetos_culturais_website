import { Container, AppBar, Box, Typography, Paper } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


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
          <EmailIcon sx={{ fontSize: 41 }}  />
          <FacebookIcon sx={{ fontSize: 40, marginLeft: 1 }} />
          <InstagramIcon sx={{ fontSize: 40, marginLeft: 1 }} />
        </Box>
        <Typography sx={{ fontWeight: 'bold' }}>
          © 2021 por Irmãs TM - Projetos Culturais
        </Typography>
      </Box>

    </Box>
  )
}

export default Footer