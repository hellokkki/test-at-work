import { RouterProvider } from 'react-router-dom'
import { appRouter } from './app/router/router'
import './App.scss'

function App() {
  
  return <RouterProvider router={appRouter}/>
}

export default App
