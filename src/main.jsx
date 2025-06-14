import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
// import Layout from './Layout.jsx'
// import Home from './components/home/Home.jsx'
// import About from './components/about/about.jsx'
// import Contact from './components/contact/Contact.jsx'
// import User from './components/user/User.jsx'

// Method 1: Original method of making router
// const router = createBrowserRouter ([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ]
//   }
// ])

// Method 2: (Better than First method)
// const router = createBrowserRouter(
//   createRoutesFromElements (
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />}/>
//       <Route path='about' element={<About />}/>
//       <Route path='contact' element={<Contact />}/>
//       <Route path='user/:id' element={<User />}/>
//     </Route>
//   )
// )

// Better way is to make a separate folder - Routes and app everything to it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
