import React from 'react'
import '../src/TempBox.css'
import { useState } from 'react'

function TempBox() {
  const [temp,setTemp] = useState(18);
  const [colorchange,setColorChange] = useState("temp-value")

  const adding =()=>{
    setTemp(temp+1);
    if(temp>=20){
      setColorChange("temp-value-high")
    }


  }
  const subtracting =()=>{
    setTemp(temp-1);
    if(temp<=19){
      setColorChange("temp-value")
    }

  }
  return (
    <div className='temp-box'>
      <h1>Temperature Control</h1>
      <div className='box'>
        <div className='box-content'>
          <span className={colorchange}>{temp}°C</span>
          <div className='buttons'>
            <button onClick={subtracting} className='btn'>-</button>
            <button onClick={adding}  className='btn'>+</button>
            
          </div>
          
        </div>
      </div>
      </div>
  )
}

export default TempBox