import React, { useState } from 'react';
import Input from '../component/Input';
import icon from '../assets/icon.png'
import { Link,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import axios from 'axios';
import useUserStore from '../store/userStore';

const Signin = () => {
    const navigate = useNavigate()
    const {addUser} = useUserStore()
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async(e) => {
        e.preventDefault()
        if(!value.email || !value.password){
            return toast.error('Please enter email and password')
        }
        //----------production------------

        // try {
        //     const res = axios.post('',value)
        //     if(res.data){
        //         addUser(res.data)
        //         navigate('/')
        //     }
        // } catch (error) {
        //     toast.error('Something went wrong')
        // }
        
        //-------trail code-----
        addUser(value)
        navigate('/')
    }
    return (
        <div
            className='h-screen flex justify-center'
        >
            <div
                className='w-11/12 md:w-1/4'
            >
                <div
                    className='p-4 space-y-2'
                >
                    <img
                        src={icon}
                        className='w-20 mx-auto'
                    />
                    <h2
                        className='text-center text-xl font-sans'
                    >
                        Audio Anazyler
                    </h2>
                </div>
                <form
                    onSubmit={handleLogin}
                    className='space-y-2'
                >
                    <Input {...{
                        label: 'Email',
                        name: 'email',
                        value, setValue
                    }} />

                    <Input {...{
                        label: 'Password',
                        name: 'password',
                        value, setValue
                    }} />
                    <button
                        className='w-full p-2 bg-teal-500 text-white rounded'
                    >
                        Login
                    </button>
                </form>
                <div
                    className='py-2 flex justify-between'
                >
                    <Link
                        to='/signup'
                        className='text-teal-500'
                    >
                        Sign up
                    </Link>
                    <Link
                        to='/forget'
                        className='text-red-500'
                    >
                        Forget password ?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signin;