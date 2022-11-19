import React from 'react'
import {Form} from './Form'
import {useDispatch} from 'react-redux'
import {setUser} from '../store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'


const SignUp = () => {

    const dispatch=useDispatch();
    const navigate = useNavigate();

    const handleRegister=(email,pass)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, pass)
        .then(({user})=>{
          console.log(user)
          dispatch(setUser({
            email:user.email,
            id: user.uid,
            token:user.accessToken,
          }));
          navigate('/');
        })
        .catch(console.error)
    }

  return (
    <div>
            <Form
      title="Зарегистрироваться"
      handleClick={handleRegister}
      />
    </div>
  )
}

export {SignUp}
