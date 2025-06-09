import './app.css';
import PasswordGenerator from './components/PasswordGenerator';

function App() {

  let myObj = {
    name : "Tony",
    age : "21"
  }

  return (
    <>
    <PasswordGenerator />
    </>
  )
}

export default App