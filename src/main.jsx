import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { GithubInfoLoader } from './Components/Github/Github.jsx'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>

//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//         path:"Contact",
//         element:<Contact/>
//       },
//         {
//         path:"User/:userid",
//         element:<User/>
//       },
     
//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='User/:userid' element={<User/>}></Route>
      <Route loader={GithubInfoLoader} path='Github' element={<Github/>}></Route>
    </Route>,
     {
    basename: "/React-router"  
  }
    
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
