import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup';
import { Link } from 'react-router-dom';

const Signup = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Full Name' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} /> <br />
                <input type="text" placeholder='Username' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} /> <br />
                <input type="password" placeholder='Password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /> <br />
                <input type="password" placeholder='Confirm Password' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /> <br />
                <label for="option1"><input type="radio" id="option1" name="options" value="option1" onChange={() => setInputs({ ...inputs, gender: 'male' })} />male</label>
                <label for="option2"><input type="radio" id="option2" name="options" value="option2" onChange={() => setInputs({ ...inputs, gender: 'female' })} />female</label><br />
                <button>Sign Up</button>
            </form> */}




            <section class="login_section">
                <div class="login">
                    <div class="login_left_section" style={{height:'638px'}}>
                        <div class="login_left_section_cnt-signup">
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
                                <div class="login_email" style={{marginBottom:'10px'}}>
                                    <div for="">Full Name</div>
                                    <input type="text" placeholder='Full Name' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} /> 
                                </div>
                                <div class="login_email">
                                    <div for="">Username</div>
                                    <input type="text" placeholder='Username' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} /> <br />
                                </div>
                                <div class="login_password">
                                    <div for="">Password</div>
                                    <input type="password" placeholder='Password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /> <br />
                                </div>
                                <div class="login_password">
                                    <div for="">Confirm Password</div>
                                    <input type="password" placeholder='Confirm Password' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /> <br />
                                </div>
                                <label for="option1"><input type="radio" id="option1" name="options" value="option1" onChange={() => setInputs({ ...inputs, gender: 'male' })} /> male</label>
                                <label for="option2" style={{marginLeft:'10px'}}><input type="radio" id="option2" name="options" value="option2" onChange={() => setInputs({ ...inputs, gender: 'female' })} /> female</label><br />

                                {/* <div class="login_remember_forgot">
                                    <div>Remember me</div>
                                    <div>Forgot Password</div>
                                </div> */}
                                <div class="login_sign_btn">
                                    <button
                                        // disabled={!isFormValid()}
                                        type='submit'
                                        className={"btn"}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                            <div class="login_google_btn">
                                <button>
                                    <img src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                                    Sign In with Google</button>
                            </div>
                            <div class="login_signUp">Already have an Account? <Link to="/login">Login</Link></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup