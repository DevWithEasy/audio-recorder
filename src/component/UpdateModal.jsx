import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import Input from './Input';
import toast from 'react-hot-toast'
import axios from 'axios';

const UpdateModal = ({ view, setView }) => {
    const [value,setValue] = useState({
        name : '',
        phone : '',
        email : ''
    })
    const handleUpdate = async(e) => {
        e.preventDefault()
        if(!value.name || !value.phone || !value.email){
            return toast.error('Please enter email and password')
        }

        try {
            const res = axios.post('',value)
            if(res.data){
                setView(false)
            }
        } catch (error) {
            toast.error('Something went wrong')
        }
        
    }
    return (
        <div
            className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-teal-500/50'
        >
            <div
                className='w-11/12 md:w-4/12 mx-auto bg-white rounded-md shadow'
            >
                <div
                    className='px-4 py-2 flex justify-between items-center border-b'
                >
                    <h2
                        className='text-xl uppercase'
                    >
                        Update profile
                    </h2>
                    <RxCross2 
                        size={28}
                        onClick={()=>setView(!view)}
                        className='cursor-pointer hover:text-red-500'
                    />
                </div>
                <form
                    onSubmit={handleUpdate}
                    className='p-4 space-y-2'
                >
                    <Input {...{
                        label: 'Name',
                        name: 'name',
                        currentValue : value.name,
                        value, setValue
                    }} />

                    <Input {...{
                        label: 'Phone',
                        name: 'phone',
                        type : 'phone',
                        currentValue : value.phone,
                        value, setValue
                    }} />

                    <Input {...{
                        label: 'Email',
                        name: 'email',
                        type : 'email',
                        currentValue : value.email,
                        value, setValue
                    }} />

                    <button
                        className='w-full p-2 bg-teal-500 text-white rounded'
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateModal;