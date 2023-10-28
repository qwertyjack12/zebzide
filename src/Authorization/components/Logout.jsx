import TextTyper from 'text-type-animation-effect-react'


import '../../styles/Logout.css'
import ParticlesBg from './ParticlesBg'

export default function Logout(){
    return (
        <div className="logout-body">

            <ParticlesBg/>


            <header>
                <p>Already have an account? <a href='/login'>Sign in →</a></p>
            </header>

            <main>
                <form>
                    <section className='wlcm'>
                        <TextTyper text={"Welcome to ZebZide !\nLet’s begin the adventure"} interval={35} Markup={"p"} />
                    </section>
                    <section>
                        <p>Enter your e-mail*</p>
                        <input autoFocus type="text" />
                    </section>

                    <section>
                        <p>Create a password*</p>
                        <input type="password" />
                    </section>

                    <section>
                        <p>Enter a username*</p>
                        <input type="text" />
                    </section>

                    <button>Create account</button>
                </form>
            </main>

            <footer>
                <p>
                By creating an account, you agree to the <a href='https://en.m.wikipedia.org/wiki/Terms_of_service' target='_blank' rel="noreferrer">Terms of Service</a>. 
                We’ll occasionally send you account-related e-mails.
                </p>
            </footer>
        </div>
    )
}