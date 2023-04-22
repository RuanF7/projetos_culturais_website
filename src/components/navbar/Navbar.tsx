import { AppBar, Tab, IconButton, InputBase, Paper, Tabs, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


function Navbar() {
  const [value, setValue] = useState();

  return (
    <>
      <AppBar
        sx={{
          backgroundColor: 'primary',
        }}
      >
        <Toolbar>
          <Tabs textColor="inherit"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
          >
            <Tab sx={{ color: '#000000' }} label='Home' />
            <Tab sx={{ color: '#000000' }} label='Gravataí: entre anjos e Gravatás' />
            <Tab sx={{ color: '#000000' }} label='CECI: a menina que podia voar' />
            <Tab sx={{ color: '#000000' }}
              label='SPMG: uma história de luta' />
          </Tabs>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, marginLeft:'auto' }}            
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar