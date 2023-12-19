import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const PhoneChangeModal = ({ view, setView, phone, setPhone }) => {
    return (
        <div
            className='fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-teal-500/50'
        >
            <div
                className='w-11/12 md:w-4/12 mx-auto bg-white rounded-md shadow'
            >
                <div
                    className='p-2 flex justify-between items-center border-b'
                >
                    <h2
                        className='text-xl font-bold'
                    >
                        Change Phone Number
                    </h2>
                    <RxCross2 
                        size={28}
                        onClick={()=>setView(!view)}
                        className='cursor-pointer hover:text-red-500'
                    />
                </div>
                <div
                    className='p-4 space-y-2'
                >
                    <label>Phone Number :</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='w-full p-2 border rounded focus:outline-teal-500'
                    />
                </div>
            </div>
        </div>
    );
};

export default PhoneChangeModal;