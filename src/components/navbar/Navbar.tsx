import { AppBar, Tab, IconButton, InputBase, Paper, Tabs, Toolbar, Typography } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import React from "react";
import NavbarDropDown from "./NavbarDropDown";


function Navbar() {
  const [value, setValue] = useState();

  /*Dropdown botão - HOME*/

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  /*Dropdown botão - Gravataís: Entre anjos e gravatás*/

  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  /*Dropdown botão - SPMG: Uma história de luta*/

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
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
              <MenuItem onClick={handleClose}>As Irmãs TM</MenuItem>
              <MenuItem onClick={handleClose}>Contato</MenuItem>
            </Menu>

            <Tab label='Gravataí: entre anjos e Gravatás' href='/gravatai/Gravatai' />
            <IconButton color="warning" aria-label="dropdown"
            id="fade-button"
            aria-controls={open1 ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open1 ? 'true' : undefined}
            onClick={handleClick1}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl1}
              open={open1}
              onClose={handleClose1}
              TransitionComponent={Fade}
              sx={
                { mt: "1px", "& .MuiMenu-paper": 
                  { backgroundColor: "secondary.main", }, 
                }
              }
              
            >
              <MenuItem onClick={handleClose1}>Vídeos e Entrevistas</MenuItem>
              <MenuItem onClick={handleClose1}>Lugares de Gravataí</MenuItem>
            </Menu>

            <Tab label='CECI: a menina que podia voar' href='/ceci/Ceci' />

            <Tab label='SPMG: uma história de luta' href='/spmg/Spmg' />
            <IconButton color="warning" aria-label="dropdown"
            id="fade-button"
            aria-controls={open2 ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open2 ? 'true' : undefined}
            onClick={handleClick2}
            >
              <ArrowDropDownIcon />
            </IconButton>
            <Menu
              id="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              TransitionComponent={Fade}
              sx={
                { mt: "1px", "& .MuiMenu-paper": 
                  { backgroundColor: "secondary.main", }, 
                }
              }
              
            >
              <MenuItem onClick={handleClose2}>Linha do Tempo SPMG</MenuItem>
              <MenuItem onClick={handleClose2}>História Impressa</MenuItem>
              <MenuItem onClick={handleClose2}>Campanhas Sindicais</MenuItem>
              <MenuItem onClick={handleClose2}>Fotos</MenuItem>
              <MenuItem onClick={handleClose2}>Depoimentos</MenuItem>
              <MenuItem onClick={handleClose2}>Postagens</MenuItem>
              <MenuItem onClick={handleClose2}>E a Luta Continua...</MenuItem>
            </Menu>
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