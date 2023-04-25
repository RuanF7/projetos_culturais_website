import { AppBar, Tab, IconButton, InputBase, Paper, Tabs, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React from "react";


function Navbar() {
  const [value, setValue] = useState();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              '& button': { borderRadius: 2 },
              '& button:hover': { backgroundColor: 'secondary' },
              '& button:active': { backgroundColor: 'warning' }
            }}
          >
            <Tab label='Home' href='/home/Homepage' />
            <IconButton color="warning" aria-label="dropdown"
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
              sx={
                { mt: "1px", "& .MuiMenu-paper": 
                  { backgroundColor: "secondary.main", }, 
                }
              }
              
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>

            <Tab label='Gravataí: entre anjos e Gravatás' href='/gravatai/Gravatai' />
            <IconButton color="warning" aria-label="dropdown">
              <ArrowDropDownIcon />
            </IconButton>

            <Tab label='CECI: a menina que podia voar' href='/ceci/Ceci' />

            <Tab label='SPMG: uma história de luta' href='/spmg/Spmg' />
            <IconButton color="warning" aria-label="dropdown">
              <ArrowDropDownIcon />
            </IconButton>
          </Tabs>

          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, marginLeft: 'auto' }}
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