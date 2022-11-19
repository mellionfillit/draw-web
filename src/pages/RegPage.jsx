import {SignUp} from '../comp/SignUp'
import React from 'react'
import {Link} from "react-router-dom"

function RegPage() {
  return (
    <div>
      <h1>Register</h1>
        <SignUp/>
      <p>
        Уже есть аккаунт? <Link to="/login">Войти</Link>
      </p>

    </div>
  )
}

export default RegPage
