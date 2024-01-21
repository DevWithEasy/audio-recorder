import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import icon from '../assets/icon.png';
import Input from '../component/Input';
import useUserStore from '../store/userStore';
import { auth, db } from '../utils/dbConfig';

const Signin = () => {
    const navigate = useNavigate()
    const { addUser } = useUserStore()
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState({
        email: '',
        password: ''
    })
    const handleLogin = async (e) => {
        e.preventDefault()
        if (!value.email || !value.password) {
            return toast.error('Please enter email and password')
        }
        setLoading(true)
        try {
            signInWithEmailAndPassword(auth, value.email, value.password)
                .then(async (userCredential) => {
                    const user = userCredential.user
                    const docRef = doc(db, "users", user.uid)
                    const docSnap = await getDoc(docRef)
                    addUser(docSnap.data())
                    toast.success('Login successful')
                    navigate('/')
                })
                .catch((error) => {
                    setLoading(false)
                    toast.error(error.message)
                })
        } catch (error) {
            setLoading(false)
            toast.error(error.message)
        }
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
                        label: 'Phone Number',
                        name: 'email',
                        currentValue: value.email,
                        value, setValue
                    }} />

                    <Input {...{
                        label: 'Password',
                        name: 'password',
                        currentValue: value.password,
                        value, setValue
                    }} />
                    <button
                        className='w-full p-2 bg-teal-500 text-white rounded'
                    >
                        {loading ? 'Loging...' : 'Login'}
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