import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const url = 'http://localhost:5000/'

const DataTable = () => {
    const [dataUsers, setDataUsers] = useState([])


    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        const response = await axios.get(`${url}users`)
        setDataUsers(response.data)
    }

    const onDelete = (id) => {
        axios.delete(`${url}users/${id}`)
        getUsers()
    }

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='text-3xl my-5 font-bold flex justify-center '>Data Users</div>
            <Link to="add">
                <button className='bg-sky-500 rounded hover:bg-sky-700 px-2 mb-5'>Add User</button>
            </Link>

            <table className='w-[85%]'>
                <thead>
                    <tr className='bg-neutral-900 text-white'>
                        <th>NO.</th>
                        <th>NAMA</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUsers.length !== 0 ?
                        dataUsers.map((item, index) => (
                            <tr key={index} className={index % 2 === 1 ? `bg-neutral-200 h-8` : `h-8`}>
                                <td className='text-center'>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td className='flex justify-center gap-2 h-8 items-center'>
                                    <Link to={`/users/${item.id}`} className='bg-sky-500 rounded hover:bg-sky-700 px-2'>Edit</Link>
                                    <button onClick={(id) => onDelete(item.id)} className='bg-sky-500 rounded hover:bg-sky-700 px-2'>Delete</button>
                                </td>
                            </tr>
                        ))
                        :
                        <tr></tr>
                    }
                </tbody>
            </table>

        </div>
    )
}

export default DataTable