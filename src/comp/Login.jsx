import React from 'react'
import {Form} from './Form'
import {useDispatch} from 'react-redux';
import {setUser} from '../store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'


const Login = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();

    const handleLogin=(email,pass)=>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, pass)
      .then(({user})=>{
        console.log(user)
        dispatch(setUser({
          email:user.email,
          id: user.uid,
          token:user.accessToken,
        }));
        navigate('/');
      })
      .catch(()=>alert("Неверные данные!"))
  }

  return (
    <div>
      <Form
      title="Войти" 
      handleClick={handleLogin}
      />
    </div>
  )
}

export {Login}
