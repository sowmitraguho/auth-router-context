
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './LayOut/Main'
import Home from './Components/Home'
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: '/login',
          element: <LogIn></LogIn>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
