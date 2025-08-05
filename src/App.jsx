import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Layout from './assets/pages/Layout'
import Home from './assets/Components/Home'
import Users from './assets/Components/Users'
import Contact from './assets/Components/Contact'
import OneUser from './assets/Components/OneUser'


import './App.css'
const Router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    errorElement: <h1>Error</h1>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/Users",
        element: <Users/>
      },
      {
        path:"/Contact",
        element: <Contact/>
      },
      {
        path:"/:id",
        element:<OneUser/>
      }
    ]
  }
])

function App() {
  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App
