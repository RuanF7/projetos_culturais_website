import { Avatar, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";



const CardLogo = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <Avatar
          alt="Logo"
          src="/logo.webp"
          sx={{ width: 250, height: 220, position: "fixed",paddingTop: 10, }}
        />
      </Grid>

    </Grid>



  )
}

export default CardLogo