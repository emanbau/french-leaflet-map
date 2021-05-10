import './App.css';
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Regions from './components/Regions';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#f48fb1'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Regions />
      </div>
    </ThemeProvider>
  );
}

export default App;
