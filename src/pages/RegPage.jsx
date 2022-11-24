import {SignUp} from '../comp/SignUp'
import React from 'react'
import {Link} from "react-router-dom"
import  '../comp/Stl.css'

function RegPage() {
  return (
    <div class="cnvs">
        <SignUp/>
      <p class="p">
        Уже есть аккаунт? <Link class="link" to="/login">Войти</Link>
      </p>

    </div>
  )
}

export default RegPage
