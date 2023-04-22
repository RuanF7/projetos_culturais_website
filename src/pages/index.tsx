
import { yellow, red, green } from '@/components/colors/Colors';
import Navbar from '@/components/navbar/Navbar'
import { ThemeProvider, createTheme } from "@mui/material/styles";


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
  },
});

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <Navbar />
          <h1>
            Hello World!
          </h1>
        </main>
      </ThemeProvider>

    </>
  )
}
