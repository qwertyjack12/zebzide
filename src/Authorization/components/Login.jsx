import LoginImg from '../assets/login.jpg'

import '../../styles/Login.css'

export default function Login() {
  return (
    <div className='login-body'>
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className='img' src={LoginImg} alt=''/>
            </div>

            <div className='main'>
                <h2>Sign in to ZebZide</h2>
                <form className='sign-in'>
                    <div className='row'>
                        <p>Username or e-mail address</p>
                        <input type='text'/>
                    </div>
                    <div className='row'>
                        <div className='pas'>
                            <p>Password</p>
                            <a href='#'>Forgor Password?</a>
                        </div>
                        <input type='password'/>
                    </div>
                    <button>Sign In</button>
                </form>
                <form className='sign-out'>
                    <p>New to ZebZide? <a href='./logout'>Create an account</a></p>
                </form>
            </div>
        </div>
    </div>
  )
}
