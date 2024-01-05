import React, { useState } from 'react'
import userImage from '../assets/demo-user.png'
import UpdateModal from '../component/UpdateModal';

const Dashboad = () => {
    const [view, setView] = useState(false)
    return (
        <div
            className='md:w-1/2 md:mx-auto'
        >
            <div
                className='m-2 p-4 flex flex-col items-center space-y-4 bg-white rounded-md'
            >
                <img
                    src={userImage}
                    className='w-[150px] p-1 ring-2 rounded-full'
                />
                <div
                    className='space-y-1'
                >
                    <p
                        className='pb-2 text-xl font-semibold'
                    >
                        Md Robiul Awal
                    </p>
                    <p
                        className='text-sm text-gray-500'
                    >
                        robiulawal68@gmail.com
                    </p>
                    <p
                        className='text-sm text-gray-500'
                    >
                        +8801717642515
                    </p>
                    <button
                        onClick={()=>setView(!view)}
                        className='px-2 py-1 text-sm border rounded'
                    >
                        Update
                    </button>
                </div>
            </div>
            <div
                className='m-2 p-2 space-y-2 bg-white rounded-md'
            >
                <h2
                    className='pb-2 text-xl border-b'
                >
                    Completed reports :
                </h2>
                <div
                    className='overflow-x-auto'
                >
                    <table
                        className='w-full'
                    >
                        <thead
                            className='bg-gray-100'
                        >
                            <tr>
                                <td
                                    className='px-2 py-1'
                                >
                                    Date
                                </td>
                                <td
                                    className='px-2 py-1'
                                >
                                    Task
                                </td>
                                <td
                                    className='px-2 py-1'
                                >
                                    Task
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                className='text-gray-500 text-sm border-b cursor-pointer'
                            >
                                <td className='px-2 py-1'>
                                    01/01/2024
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                            </tr>
                            <tr
                                className='text-gray-500 text-sm border-b cursor-pointer'
                            >
                                <td className='px-2 py-1'>
                                    01/01/2024
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                            </tr>
                            <tr
                                className='text-gray-500 text-sm border-b cursor-pointer'
                            >
                                <td className='px-2 py-1'>
                                    01/01/2024
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                            </tr>
                            <tr
                                className='text-gray-500 text-sm border-b cursor-pointer'
                            >
                                <td className='px-2 py-1'>
                                    01/01/2024
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {view &&
                <UpdateModal {...{view,setView}}/>
            }
        </div>
    );
};

export default Dashboad;