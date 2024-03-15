import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const changeInputHandler = (e) => {
        setUserData(prevState => {
            return {...prevState, [e.target.name] : e.target.value}
        })
    }
  return (
        <section className='register'>
            <div className='container'>
                <h2>Sign Up</h2>
                <form className='form register_form'>
                    <p className='form_error-message'> This is an error</p>
                    <input type="text" placeholder='Full Name' name='name' value={userData.name}
                     onChange={changeInputHandler} autoFocus required/>

                    <input type="email" placeholder='Email Address' name='email' value={userData.email}
                     onChange={changeInputHandler} required/>

                    <input type="password" placeholder='Password' name='password' value={userData.password}
                     onChange={changeInputHandler} required/>

                    <input type="password" placeholder='Confirm Password' name='confirmPassword' value={userData.confirmPassword}
                     onChange={changeInputHandler} required/>

                     <button type='submit' className='btn'>Register</button>
                </form>
                <small>Already have an Account? <Link t0="/login">Sign in</Link></small>
            </div>
        </section>
  )
}

export default Register
