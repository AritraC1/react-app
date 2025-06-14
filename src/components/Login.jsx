import React, {useState, useContext} from 'react'
import userContext from '../source/userContext'

function Login() {

    const [username, setUserame] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

  return (
    <div>
        <h2>Login</h2>
        <input 
            value={username} 
            onChange={(e) => {
                setUserame(e.target.value)
            }}
            type="text" 
            placeholder='username'
        />
        {" "}
        <input 
            value={password} 
            onChange={(e) => {
                setPassword(e.target.value)
            }}
            type="text" 
            placeholder='password'
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login