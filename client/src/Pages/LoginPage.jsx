import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const changeInputHandler = (e) => {
        setUserData(prevState => {
            return {...prevState, [e.target.name] : e.target.value}
        })
    }
  return (
        <section className='login'>
            <div className='container'>
                <h2>Sign In</h2>
                <form className='form login_form'>
                    <p className='form_error-message'> This is an error</p>
                    <input type="email" placeholder='Email Address' name='email' value={userData.email}
                     onChange={changeInputHandler} autoFocus required/>

                    <input type="password" placeholder='Password' name='password' value={userData.password}
                     onChange={changeInputHandler}required/>

                     <button type='submit' className='btn'>Login</button>
                </form>
                <small>Don't have an Account? <Link t0="/register">Sign Up</Link></small>
            </div>
        </section>
  )
}

export default LoginPage
