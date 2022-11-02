import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const url = 'http://localhost:5000/'

const Add = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [gender, setGender] = useState()
    const navigate = useNavigate()
    
    const { id } = useParams()
    useEffect(()=> {
        getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
 
    const getUser= async ()=> {
        const response = await axios.get(`${url}users/${id}`)
        setName(response.data.name)
        setEmail(response.data.email)
        setGender(response.data.gender)
    }

    const updateUser = (e) => {
        e.preventDefault()
        try {
            axios.patch(`${url}users/${id}`, {
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
            <form onSubmit={updateUser} className='flex  flex-col gap-3'>
                <input
                    onChange={(e) => setName(e.target.value)}
                    className='border-sky-500 border rounded px-2'
                    type="text"
                    defaultValue={name}
                    placeholder='Full Name' />

                <input onChange={(e) => setEmail(e.target.value)}
                    className='border-sky-500 border rounded px-2'
                    type="text"
                    defaultValue={email}
                    placeholder='Email' />

                <input onChange={(e) => setGender(e.target.value)}
                    className='border-sky-500 border rounded px-2'
                    type="text"
                    defaultValue={gender}
                    placeholder='Gender' />

                <button type='submit' className='bg-sky-500 rounded hover:bg-sky-700 px-2 mb-5'>Update</button>
            </form>
        </div>
    )
}

export default Add