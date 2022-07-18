import React, { useState } from 'react'
import { Input, Button  } from 'antd';
import './register.less'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate();

  const handleLoginClick = async  (e)=>{
    e.preventDefault()

    const userInfo = {
      email: email,
      password: password,
    }

    try{
        const log = await axios.post('http://localhost:8000/auth/login', userInfo)

        localStorage.setItem("user", JSON.stringify(log.data))

        if(log.data.role === 'admin')
          navigate('/admin')
        else
          navigate('/user')

      }catch(err){
        console.log("error")
      }

    }


  return (
    <div  className='register'>
        <label>Email</label>
        <Input className='input' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password</label>
        <Input className='input'  onChange={(e)=>{setPassword(e.target.value)}}/>
        <div className='input'>
            <Button type="primary" onClick={handleLoginClick} >Login</Button>
        </div>
    </div>
  )
}

export default Login