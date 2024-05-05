import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { MyHeader } from './components/header/header';
import { blueGrey } from '@mui/material/colors';
import '../src/assets/css/reset.css';

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
