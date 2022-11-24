import {Login} from '../comp/Login'
import React from 'react'
import {Link} from "react-router-dom"
//import  '../comp/Stl.css'


function LogPage() {

  return (
    <div class="cnvs">
      <Login/>
      <p class="p">
        Нет аккаунта? <Link class="link" to="/register">Зарегистрироваться</Link>
      </p>
    </div>
  )
}

export default LogPage
