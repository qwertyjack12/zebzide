import LoginImg from '../assets/login.jpg'

import { Link } from "react-router-dom"
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

import '../../styles/Login.css'
import { useState } from 'react'

export default function Login() {

    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(!open)
    }

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      }
    
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    
    function base_64(){
        const str = `${username}:${password}`;
        const base64str = btoa(str)
        console.log('Base64-строка для базовой авторизации:', base64str)
    }

  return (
    <div className='login-body'>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full bg-king-gray'>
            <div className='hidden sm:block'>
                <img className='img' src={LoginImg} alt=''/>
            </div>

            <div className='main'>
                <h2>Sign in to ZebZide</h2>
                <form className='sign-in'>
                    <div className='row'>
                        <p>Username or e-mail address</p>
                        <input 
                            autoFocus 
                            type='text'
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className='row'>
                        <div className='pas'>
                            <p>Password</p>
                            <a href='#'>Forgor Password?</a>
                        </div>
                        <div className='relative'>
                            
                            <input 
                                type={(open === false)? 'password': 'text'} 
                                className='w-10/12'
                                onChange={handlePasswordChange}
                            />
                            

                            <div className='text-2xl absolute top-4 right-3'>
                                {
                                    (open === false)? <AiFillEye onClick={toggle}/>:
                                                      <AiFillEyeInvisible onClick={toggle}/>
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                    <button onClick={base_64}>Sign In</button>
                </form>
                <form className='sign-out'>
                    <p>New to ZebZide? <Link to='/logout'>Create an account</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}
