import { Input, Select, Button  } from 'antd';
import './register.less'
import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
    const { Option } = Select;

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [company, setCompany] = useState('')

    let navigate = useNavigate();


    const onChange = (value) => {
        setRole(value)
    };

    const handleRegisterClick = async  (e)=>{
        e.preventDefault()
        const userInfo = {
          name: name,
          email: email,
          password: password,
          role: role,
          company: company
        }
        try{
            const reg = await axios.post('http://localhost:8000/auth/register', userInfo)
            reg && navigate('/login')
          }catch(err){
            console.log("error")
          }
    
        }

  return (
    <div className='register'>
        <label>Name</label>
        <Input className='input' onChange={(e)=>{setName(e.target.value)}} />
        <label>Email</label>
        <Input className='input' onChange={(e)=>{setEmail(e.target.value)}}/>
        <label>Password</label>
        <Input className='input' onChange={(e)=>{setPassword(e.target.value)}}/>
        <label>Company</label>
        <Input className='input' onChange={(e)=>{setCompany(e.target.value)}}/>
        <Select className='input'
            showSearch
            placeholder="Select a Role"
            optionFilterProp="children"
            onChange={onChange}
            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
        </Select>
        <div className='input'>
            <Button type="primary" onClick={handleRegisterClick}> Register </Button>
            <Link to = '/login' style={{marginLeft: '10px'}}>
              <Button type='primary' style={{marginTop: '10px'}}>Login</Button>
            </Link>
        </div>
    </div>
  )
}

export default Register