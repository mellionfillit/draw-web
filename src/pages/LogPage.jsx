import {Login} from '../comp/Login'
import React from 'react'
import {Link} from "react-router-dom"


function LogPage() {

  return (
    <div>
      <h1>Login</h1>
      <Login/>
      <p>
        Or <Link to="/register">register</Link>
      </p>
    </div>
  )
}

export default LogPage
