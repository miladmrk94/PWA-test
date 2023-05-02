import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './styles/muiCustomTheme.jsx';
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "@mui/material/styles";
import { store } from './store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
