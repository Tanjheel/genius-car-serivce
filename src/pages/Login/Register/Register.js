import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();

    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form >
                <input type="text" name="name" placeholder='Your Name' required />
                <br />
                <input type="email" name="email" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" placeholder='Your password' required />
                <br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account?<Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div >
    );
};

export default Register;