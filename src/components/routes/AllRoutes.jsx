import { Route, Routes } from 'react-router-dom'
import Layout from '../../Layout.jsx'
import Home from '../home/Home.jsx'
import About from '../about/about.jsx'
import Contact from '../contact/Contact.jsx'
import User from '../user/User.jsx'


function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} /> {/* Same as: <Route path='' element={<Home />}/> */}
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='user/:id' element={<User />}/>
        </Route>
    </Routes>
    </>
  )
}

export default AllRoutes