import React, { useState } from 'react'
import useLogin from '../../hooks/useLogin';
import { Link } from 'react-router-dom';
import './login.css'
import addNotification from 'react-push-notification';

const Login = () => {
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const {login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(input);
  }


  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" placeholder='username' onChange={(e) => setInput({ ...input, username: e.target.value })} /> <br />
        <input type="password" placeholder='password' onChange={(e) => setInput({ ...input, password: e.target.value })} /> <br />
        <button>Login</button>
      </form> */}






      <section class="login_section">

                <div class="login">
                    <div class="login_left_section">
                        <div class="login_left_section_cnt">
                            <div class="quote">A WISE QUOTE <span>-----------</span></div>
                            <div class="advice">
                                <h2>Get <br /> Everything <br /> You Want</h2>
                                <p>You can get everything you want if you work hard. <br /> trust the process, and stick to the plan.</p>
                            </div>
                        </div>
                    </div>
                    <div class="login_right_section">
                        <div class="login_right_section_cnt">
                            <div class="login_logo">
                                {/* <img src="" alt="" /> */}
                                Cogie
                            </div>
                            <h2 class="welcome_text">Welcome Back</h2>
                            <p class="welcome_para">Enter your Username and Password to access your account</p>


                            <form onSubmit={handleSubmit}>
                                <div class="login_email">
                                    <div for="">Username</div>
                                    <input
                                        type="text"
                                        id="fname"
                                        name="username"
                                        placeholder="Enter your Username"
                                        value={input.username}
                                        onChange={(e) => setInput({ ...input, username: e.target.value })}
                                    />

                                </div>
                                <div class="login_password">
                                    <div for="">Password</div>
                                    <input
                                        placeholder="Enter your Password"
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={input.password}
                                        onChange={(e) => setInput({ ...input, password: e.target.value })}
                                    />
                                </div>
                            
                                <div class="login_remember_forgot">
                                    <div>Remember me</div>
                                    <div>Forgot Password</div>
                                </div>
                                <div class="login_sign_btn">
                                    <button
                                        // disabled={!isFormValid()}
                                        type='submit'
                                        className={"btn"}
                                    >
                                        Sign In
                                    </button>
                                </div>
                            </form>

                            <div class="login_google_btn">
                                <button>
                                    <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                                    Sign In with Google</button>
                            </div>
                            <div class="login_signUp">Don't have an Account? <Link to="/signup">Sign Up</Link></div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Login