import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import '../src/assets/css/reset.css';
import { MyHeader } from './components/header/header';

const theme = createTheme({
  palette: {
    primary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700]
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <MyHeader />
    </ThemeProvider>
  );
}
