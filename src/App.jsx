// import AllRoutes from './components/routes/AllRoutes';
import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./source/UserContextProvider"

function App() {

  return (
    // <>
    //   <AllRoutes /> 
    // </>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App