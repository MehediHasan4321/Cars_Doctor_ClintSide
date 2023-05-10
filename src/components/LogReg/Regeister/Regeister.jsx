import React, { useContext, useState } from 'react';
import loginSvg from '../../../assets/images/login/login.svg'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AutnContextProvider } from '../../../AuthProvider/AuthPrivider';
import {getAuth, updateProfile} from 'firebase/auth'
import app from '../../../Firebase/firebase.config';
const Regeister = () => {
    const [error,setError] = useState('')
    const {signInWithEmail,singInWithGoogle} = useContext(AutnContextProvider)
    const auth = getAuth(app)
    setTimeout(()=> setError(''),7000)
    const regeister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        const imgUrl = form.url.value
        signInWithEmail(email,password)
        .then(()=>{
            alert('You Are sing in success fully')
            form.reset()
            updateProfile(auth.currentUser,{
                displayName:name,photoURL:imgUrl
            })
            .then(()=>{

            })
            .catch(err=>setError(err.message))
    })
        .catch(err=>{
            setError(err.message)
            
        })
        
    }
    return (
        <div className='container mx-auto my-20 flex justify-center items-center gap-10'>
            <img src={loginSvg} alt="" />
            <div className='w-[25vw] border-[1px] p-10'>
                <h1 className='text-4xl font-semibold text-center mb-4'>Create An Accoount</h1>
                <form onSubmit={regeister} className='space-y-5'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Full Name" required name='name' className="input input-bordered" />
                    </div>
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Profile Pic URL</span>
                        </label>
                        <input type="url" placeholder="Set Your Profile Pic URL" name='url' className="input input-bordered" />
                    </div>
                    {error&&<small className='text-[#ff3811] text-center mt-2'>{error}</small>}
                    <div className="form-control pt-2">
                        <input type="submit" value="Create Account" className='input bg-[#ff3811] text-white' />
                    </div>
                    <div>
                        <p className='text-sm text-gray-600 text-center'>Or Sign In With</p>
                        <div className='flex gap-4 justify-center mt-4 text-3xl text-[#ff3811]'>
                            <FaGoogle title='login with google' className=' cursor-pointer' />
                            <FaGithub title='login with Github' className=' cursor-pointer' />
                            <FaFacebook title='login with Facebook' className=' cursor-pointer' />
                        </div>
                        <p className='text-sm text-gray-400 font-semibold mt-4 text-center'>Already Have An Accouont <Link to={'/logreg/login'} className='text-[#ff3811]'> Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Regeister;