import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const obj = { email, password };

        fetch('http://localhost:4000/Signup', {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(response => {
            setLoading(false);
            if (response.status === 400) {
                alert("User already registered");
                navigate("/login");
            } else if (response.status === 201) {
                alert("Successfully registered");
                navigate("/exercise");
            } else {
                throw new Error('Signup failed');
            }
        })
        .catch(error => {
            setLoading(false);
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        });
    };

    return (
        <div className="container">
            <h2>Signup</h2>
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
                <button type="submit" disabled={loading}>{loading ? 'Signing Up...' : 'Signup'}</button>
            </form>
        </div>
    );
};

export default Signup;
