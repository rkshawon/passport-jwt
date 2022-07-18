import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function User({getrole}) {
  const logout = ()=>{
    localStorage.removeItem("user")
  }

  useEffect(()=>{
    const user =  JSON.parse(localStorage.getItem("user"))
    axios.get('http://localhost:8000/auth/protected', {headers : {
      Authorization: user.token
    }})
    .then(res =>{
      getrole(res.data.user)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [])


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1>Welcome to User panel</h1>
      <Link to = '/admin'>
        <Button type='primary'>Go to Admin Panel</Button>
      </Link>
      <Link to = '/login' onClick={logout}>
        <Button type='primary' style={{marginTop: '10px'}}>Logout</Button>
      </Link>
    </div>
  )
}

export default User