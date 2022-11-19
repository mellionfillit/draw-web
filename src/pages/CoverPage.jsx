import React, { useEffect, useRef, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { CirclePicker } from 'react-color'
import "./CoverCss.css"
import { useAuth } from '../hooks/use-auth';
import { removeUser } from 'store/slices/userSlice';
import {useDispatch} from 'react-redux'

export function CoverPage(){
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor,setCurrentColor]=useState("#fff")
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const {isAuth, email} = useAuth();

  useEffect (() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d")
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = {currentColor};
    context.lineWidth = 5;
    contextRef.current = context;
  });

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d")
    context.fillStyle = "white"
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  const handleOnChange=()=>{
    setCurrentColor();
  }

  
    return isAuth ? ( 
  
      <div className='container'>
  
        <div className='box-1'><canvas
          onMouseDown={startDrawing}
          onMouseUp={finishDrawing}
          onMouseMove={draw}
          ref={canvasRef} /></div>
  
        <div className='box-2'>
          <CirclePicker 
          color={currentColor}
          onChangeComplete={handleOnChange}
          />
        </div>
        <div className='box-3'>
          <h4>hello, {email}</h4>
          <button onClick={clearCanvas}>Clear</button>
          <button onClick={()=>
            {
              dispatch(removeUser())
              navigate('/login')
              }}>Выйти</button>
        </div>
  
      </div>
    ):(
      navigate('/login')
    );
}
export default CoverPage;