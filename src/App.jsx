// import AllRoutes from './components/routes/AllRoutes';
// import Login from "./components/Login"
// import Profile from "./components/Profile"
// import UserContextProvider from "./source/UserContextProvider"

import { useState, useEffect } from "react"
import { ThemeProvider } from "./source/Theme"
import ThemeBtn from "./components/ThemeBtn"
import Card from "./components/Card"


function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");

    document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode])
  

  return (
    // <>
    //   <AllRoutes /> 
    // </>
    // <UserContextProvider>
    //   <Login />
    //   <Profile />
    // </UserContextProvider>

    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4"> <ThemeBtn /> </div>
          <div className="w-full max-w-sm mx-auto"> <Card /> </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App