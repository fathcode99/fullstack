import React, { useRef } from 'react'

import data from '../database/db'

const Login = () => {

    let usernameRef = useRef()
    let passwordRef = useRef()
 
    
    const onLogin = () => {
        let valueUsername = usernameRef.current.value
        let valuePassword = passwordRef.current.value
        
        if (valueUsername === data[0].username && valuePassword === data[0].password) {
            alert('berhasil')
        } else {
            alert('data kosong')
        }
    }

    const onSignup = ()=> {
        let valueUsername = usernameRef.current.value
        let valuePassword = passwordRef.current.value
        data.push({
            username : valueUsername,
            password : valuePassword
        })
        console.log(data)
    }
    
    console.log(data)
    return (
        <div>
            <div>
                Login Pages
                <input type="text" placeholder='username' ref={usernameRef} />
                <input type="text" placeholder='password' ref={passwordRef} />
                <button onClick={onLogin}>Login</button>
            </div>

            <div>
                SignUp 
                <input type="text" placeholder='username' ref={usernameRef} />
                <input type="text" placeholder='password' ref={passwordRef} />
                <button onClick={onSignup}>Login</button>
            </div>
        </div>
    )
}

export default Login