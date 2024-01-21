import React, { useEffect, useState } from 'react'
import userImage from '../assets/demo-user.png'
import UpdateModal from '../component/UpdateModal';
import useUserStore from '../store/userStore';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../utils/dbConfig';

const Dashboad = () => {
    const [view, setView] = useState(false)
    const { user, removeUser } = useUserStore()
    const [records, setRecords] = useState([])

    const getDatas=async() =>{
        try {
            const q = query(collection(db, "responses"), where("user", "==", user.email))

            onSnapshot(q, (querySnapshot) => {
                
                const responses = [];
                querySnapshot.forEach((doc) => {
                    responses.push(doc.data().name);
                })

                setRecords(responses)

            })
        } catch (error) {
            console.log(error)
        }
    }
    getDatas()
    console.log(user)
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
                        {user?.name}
                    </p>
                    <p
                        className='text-sm text-gray-500'
                    >
                        {user?.email}
                    </p>
                    <p
                        className='text-sm text-gray-500'
                    >
                        {user?.phone}
                    </p>
                    <div
                        className='space-x-2'
                    >
                        <button
                            onClick={() => setView(!view)}
                            className='px-2 py-1 text-sm border rounded'
                        >
                            Update
                        </button>
                        <button
                            onClick={() => removeUser()}
                            className='px-2 py-1 text-sm border rounded bg-red-500 text-white'
                        >
                            Logout
                        </button>
                    </div>
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
                            {records &&
                                records.map(record=>
                                    <tr
                                    key={record?.id}
                                className='text-gray-500 text-sm border-b cursor-pointer'
                            >
                                <td className='px-2 py-1'>
                                {record?.date}
                                </td>
                                <td className='px-2 py-1'>
                                {record?.url}
                                </td>
                                <td className='px-2 py-1'>
                                    Task 01
                                </td>
                            </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {view &&
                <UpdateModal {...{ view, setView }} />
            }
        </div>
    );
};

export default Dashboad;