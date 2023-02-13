import React, { useState } from 'react'

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
            <label for="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' />
            <button type='submit'>Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}

export default Login