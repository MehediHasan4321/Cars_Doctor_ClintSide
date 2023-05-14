import React, { useContext, useState } from 'react';
import loginSvg from '../../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AutnContextProvider } from '../../../AuthProvider/AuthPrivider';
import useTitle from '../../../customHook/useTitle';


const Login = () => {
    const [error, setError] = useState('')
    const { singUpWithEmail,singInWithGoogle } = useContext(AutnContextProvider)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    setTimeout(() => {
        setError('')
    }, 7000);
    useTitle('login')
    const login = event => {

        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        singUpWithEmail(email, password)
            .then(() => {
                alert('logIn Succssfull')
                form.reset()
                navigate(from)
            })
            .catch(err => { setError(err.message) })
    }
    const handleGoogleLogin = ()=>{
        singInWithGoogle()
        .then(()=>{
            navigate(from)
        })
        .catch(err=>setError(err.message))
    }
    return (
        <div className='container mx-auto my-20 flex justify-center items-center gap-10'>
            <img src={loginSvg} alt="" />
            <div className='w-[25vw] border-[1px] p-10'>
                <h1 className='text-4xl font-semibold text-center'>Login</h1>
                <form onSubmit={login} className='space-y-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="Enter Your Email" name='email' required className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Your Password" name='password' required className="input input-bordered" />
                    </div>
                    {error && <small className='text-[#ff3811] text-center mt-2'>{error}</small>}
                    <div className="form-control pt-2">
                        <input type="submit" value="Login" className='input bg-[#ff3811] text-white' />
                    </div>
                    <div>
                        <p className='text-sm text-gray-600 text-center'>Or Login With</p>
                        <div className='flex gap-4 justify-center mt-4 text-3xl text-[#ff3811]'>
                            <FaGoogle onClick={handleGoogleLogin} title='login with google' className=' cursor-pointer' />
                            <FaGithub title='login with Github' className=' cursor-pointer' />
                            <FaFacebook title='login with Facebook' className=' cursor-pointer' />
                        </div>
                        <p className='text-sm text-gray-400 font-semibold mt-4 text-center'>Don't Have An Accouont <Link to={'/logreg/regeister'} className='text-[#ff3811]'>Create Account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;