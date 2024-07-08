
import React, { useState,useEffect } from 'react';
import  { useNavigate   } from 'react-router-dom';

import '../styles.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    let navigate = useNavigate();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            email: email,
            password:password
        }

        fetch('http://localhost:4000', {
            method: "POST",
            credentials: 'include',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
          })
          .then((response) => {
            console.log(response.status);
            if(response.status===200){
                // setIsAuthenticated(true);
                navigate("/exercise");
            }
            else if(response.status===203){
                alert("WRONG PASSWORD")
            }
            else if(response.status===400){
                navigate("/signup");
            }
            return response.json();
          })
          .then((result) => {
            console.log(result)
          }) 
    };

    useEffect(()=>{
        fetch("http://localhost:4000")
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
      <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
        
        
};

export default Login;
