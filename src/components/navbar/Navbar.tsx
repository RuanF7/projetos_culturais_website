import { AppBar, Tab, IconButton, InputBase, Paper, Tabs, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";


function Navbar() {
  const [value, setValue] = useState();

  return (
    <>
      <AppBar
        sx={{
          background: 'primary',
        }}
      >
        <Toolbar>
          <Tabs 
            textColor="secondary"
            value={value}
            onChange={(e, value) => setValue(value)}
            indicatorColor="secondary"
            sx={{ 
              '& button': {borderRadius: 2},
              '& button:hover': { backgroundColor: 'secondary' },
              '& button:active': { backgroundColor: 'warning' }
          }}
          >
            <Tab label='Home' href='/home/Homepage' />
            <Tab label='Gravataí: entre anjos e Gravatás' href='/gravatai/Gravatai' />
            <Tab label='CECI: a menina que podia voar' href='/ceci/Ceci' />
            <Tab label='SPMG: uma história de luta' href='/spmg/Spmg' />
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