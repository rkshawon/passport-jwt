import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  const logout = ()=>{
    localStorage.removeItem("user")
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h1>Welcome to Admin panel</h1>
      <Link to = '/user'>
        <Button type='primary'>Go to User Panel</Button>
      </Link>
      <Link to = '/login' onClick={logout}>
        <Button type='primary' style={{marginTop: '10px'}}>Logout</Button>
      </Link>
      
    </div>
  )
}

export default Admin