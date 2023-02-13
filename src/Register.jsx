import React, { useState } from 'react'

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
            <label for="name">Full Name</label>
            <input value={name} name="name" id='name' onChange={(e) => setName(e.target.value)} type="email" placeholder='Full Name' />
            <label for="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Email' />
            <label for="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='******' />
            <button type='submit'>Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Already have an account? Login here.</button>
    </div>
  )
}

export default Register