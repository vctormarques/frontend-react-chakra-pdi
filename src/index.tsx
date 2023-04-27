import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

ReactDOM.render(
  <ChakraProvider resetCSS>
      <App />
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();
