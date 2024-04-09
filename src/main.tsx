import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { STORE } from './app/store/store.ts'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { appTheme } from './config/chakraTheme.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={STORE}>
      <ChakraProvider theme={appTheme}>
      <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)
