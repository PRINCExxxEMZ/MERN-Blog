import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avater from '../Image/avater-3.png'
import {FaEdit} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'


const UserProfile = () => {
  const [avater, setAvater] = useState(Avater)
  const [name, setName] = useState(Avater)
  const [email, setEmail] = useState(Avater)
  const [currentPassword, setCurrentPassword] = useState(Avater)
  const [newPassword, setNewpassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  return (
    <section className='profile'>
        <div className='container profile_container'>
              <Link to={`/myposts/10`} className='btn'>My posts</Link>

          <div className='profile_details'>
              <div className='avater_wrapper'>
                <div className='profile_avater'>
                  <img src={avater} alt="" />
                </div>
              
              <form className='avater_form'>
                  <input type="file" name='avater' id='avater' onChange={ e=> setAvater (e.target.files[0])} accept='jpg, png, jpeg'/>
                  <label htmlFor="avater"><FaEdit/></label>
              </form>
              <button className='profile_avater-btn'> <FaCheck/> </button>
            </div>

            <h1>Ark</h1>

            <form className='form prfile_form'>
              <p className='form_error-message'> Input Error</p>
              <input type="text" placeholder='Full Name' value={name} onChange={ e=> setName(e.target.value)} autoFocus required/>
              <input type="email" placeholder='Email' value={email} onChange={ e=> setEmail(e.target.value)} required/>
              <input type="password" placeholder='Current Password' value={currentPassword} onChange={e=> setCurrentPassword(e.target.value)}/>
              <input type="password" placeholder='New Password' value={newPassword} onChange={e=> setNewpassword(e.target.value)} required/>
              <input type="password" placeholder='Comfirm New Password' value={confirmNewPassword} onChange={e=> setConfirmNewPassword(e.target.value)} required/>
              <button type='submit' className='btn btn-primary'>Update</button>
            </form>
          </div>
       </div>
    </section>
  )
}

export default UserProfile
