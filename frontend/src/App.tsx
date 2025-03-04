
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Landing from './pages/landing'
import Footer from './components/ui/footer'


import Navbar from './components/ui/navbar'
import Category from './components/ui/category'
import Course from './components/ui/course'
// import ProtectedRoutes from './components/protected-routes'

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Navbar></Navbar>
        <Landing></Landing>
        <Footer />
      </>
    },
    {
      path: "/category/:id",
      element: <>
      <Navbar></Navbar>
        <Category></Category>
        <Footer />
      </>
    },
    {
      path: "/course/:id",
      element: <>
      <Navbar></Navbar>
        <Course></Course>
        <Footer />
      </>
    }
  ])
  return (
    <div>
      <RouterProvider router={Router}></RouterProvider>

    </div>
  )
}

export default App
