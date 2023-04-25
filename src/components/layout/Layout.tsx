import { yellow, red, green, gray } from '@/components/colors/Colors';
import { FC, ReactNode } from "react";
import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from 'next/head';


const theme = createTheme({
  palette: {
    primary: {
      main: yellow[50],
    },
    secondary: {
      main: red[50],
    },
    info: {
      main: green[50],
    },
    warning: {
      main: gray[50],
      light: gray[100],      
    },
  },
  
});

interface LayoutProps {
  children: ReactNode;
}


const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel='shortcut icon' href='/favicon-16x16.png' />
          <title>Projetos Culturais Irmãs TM</title>
        </Head>
        <Navbar />
        <main className="main-container">{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout