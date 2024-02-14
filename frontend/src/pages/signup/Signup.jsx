import React, { useState } from 'react'
import useSignup from '../../hooks/useSignup';

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
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Full Name' value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} /> <br />
                <input type="text" placeholder='Username' value={inputs.username} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} /> <br />
                <input type="password" placeholder='Password' value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} /> <br />
                <input type="password" placeholder='Confirm Password' value={inputs.confirmPassword} onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} /> <br />
                <label for="option1"><input type="radio" id="option1" name="options" value="option1" onChange={() => setInputs({ ...inputs, gender: 'male' })} />male</label>
                <label for="option2"><input type="radio" id="option2" name="options" value="option2" onChange={() => setInputs({ ...inputs, gender: 'female' })} />female</label><br />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default Signup