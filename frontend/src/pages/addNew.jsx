import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const url = 'http://localhost:5000/'

const Add = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()

    const navigate = useNavigate()

    const SaveUser = (e) => {
        e.preventDefault()
        try {
            axios.post(`${url}users`, {
                name,
                email,
                gender
            })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    } 
 
    return (
        <div className='w-full px-8 '>
            <div className='my-5 text-3xl font-bold '>Add New Data</div>
            <form onSubmit={(e)=>SaveUser(e)} className='flex  flex-col gap-3'>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className='border-sky-500 border rounded px-2'
                    type="text" 
                    placeholder='Full Name' />

                <input onChange={(e) => setEmail(e.target.value)}
                    className='border-sky-500 border rounded px-2'
                    type="text" 
                    placeholder='Email' />

                <input onChange={(e) => setGender(e.target.value)}
                    className='border-sky-500 border rounded px-2'
                    type="text" 
                    placeholder='Gender' />

                <button type='submit' className='bg-sky-500 rounded hover:bg-sky-700 px-2 mb-5'>Add User</button>
            </form>
        </div>
    )
}

export default Add