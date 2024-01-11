import React, { useState } from 'react';
import Input from '../component/Input';
import icon from '../assets/icon.png'
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import useUserStore from '../store/userStore';
import { db } from '../utils/dbConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Signin = () => {
    const navigate = useNavigate()
    const { addUser } = useUserStore()
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState({
        phone: '',
        password: ''
    })
    const handleLogin = async (e) => {
        e.preventDefault()
        if (!value.phone || !value.password) {
            return toast.error('Please enter email and password')
        }
        setLoading(true)
        try {
            const q = query(collection(db, "users"), where("phone", "==", value.phone),where("password", "==", value.password ))

            const findUser = await getDocs(q)

            if(findUser){
                const users = []
                findUser.forEach(doc=>{
                    users.push(doc.data())
                })
                if(users[0]){
                    addUser(users[0])
                    toast.success('login succesfull')
                    navigate('/')
                    setLoading(false)
                }else{
                    toast.error('Credentials wrong user not found.')
                    setLoading(false)
                }
            }else{
                toast.error('Credentials wrong')
                setLoading(false)
            }

        } catch (error) {
            setLoading(false)
            toast.error(error)
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
                        name: 'phone',
                        currentValue: value.phone,
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