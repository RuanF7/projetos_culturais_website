import { Container, AppBar, Box, Typography, Paper } from "@mui/material";



function Footer() {
  return (
    
    <Box
     sx={{
      bgcolor: 'primary.main', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      height: '150px',
      marginTop: '2em',
    }}
     
     >
      <Typography>Siga-me</Typography>
    </Box>
  )
}

export default Footer