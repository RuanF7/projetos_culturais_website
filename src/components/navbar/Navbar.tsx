import { AppBar, Tab, IconButton, InputBase, Paper, Tabs, Toolbar, Fade } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react";
import Link from "next/link";


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
                {
                  mt: "1px", "& .MuiMenu-paper":
                    { backgroundColor: "secondary.main" },
                }
              }
            >
              <Link href="/home/aboutUs/AboutUs"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose}>As Irmãs TM</MenuItem>
              </Link>
              <Link href="/home/contact/Contact"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose} href="/contact/Contact">Contato</MenuItem>
              </Link>
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
                {
                  mt: "1px", "& .MuiMenu-paper":
                    { backgroundColor: "secondary.main", color: 'warning.light' },
                }
              }
            >
              <Link href="/gravatai/videosEEntrevistas/VideosEEntrevistas"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose1}>Vídeos e Entrevistas</MenuItem>
              </Link>
              <Link href="/gravatai/lugares/Lugares"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose1}>Lugares de Gravataí</MenuItem>
              </Link>
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
                {
                  mt: "1px", "& .MuiMenu-paper":
                    { backgroundColor: "secondary.main", color: 'warning.light' },
                }
              }
            >
              <Link href="/spmg/linhaDoTempo/LinhaDoTempo"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>Linha do Tempo SPMG</MenuItem>
              </Link>
              <Link href="/spmg/historia/Historia"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>História Impressa</MenuItem>
              </Link>
              <Link href="/spmg/campanhas/Campanhas"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>Campanhas Sindicais</MenuItem>
              </Link>
              <Link href="/spmg/fotos/Fotos"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>Fotos</MenuItem>
              </Link>
              <Link href="/spmg/depoimentos/Depoimentos"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>Depoimentos</MenuItem>
              </Link>
              <Link href="/spmg/postagens/Postagens"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>Postagens</MenuItem>
              </Link>
              <Link href="/spmg/luta/Luta"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}
              >
                <MenuItem onClick={handleClose2}>E a Luta Continua...</MenuItem>
              </Link>
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
