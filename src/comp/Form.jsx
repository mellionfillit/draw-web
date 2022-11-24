import {useState} from 'react'



const Form = ({title, handleClick}) => {
const [email, setEmail]=useState('');
const [pass, setPass]=useState('');

  return (
    <div>
      <div class="form">
      <div class="title">Добро пожаловать!</div>
      <div class="input-container ic1">
        <input id="email" class="input" type="email" 
                value={email} onChange={(e)=>setEmail(e.target.value)}placeholder=" " />
        <label for="email" class="placeholder">Email</label>
      </div>

      <div class="input-container ic2">
        <input id="password" class="input" type="password" 
        value={pass} onChange={(e)=>setPass(e.target.value)} placeholder=" " />
        <label for="password" class="placeholder">Пароль</label>
      </div>

      <button type="text" class="submit" onClick={()=>handleClick(email, pass)}>{title}</button>
    </div>
    </div>
    
  )
}

export {Form}
