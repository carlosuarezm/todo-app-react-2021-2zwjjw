import React, { useEffect } from "react";


const button = ({className, callback, title}) =>{
  useEffect(() =>{
    return ()=>{
      console.log('Adios boton!')
    }
  },[])  
  return (
    <button className={className} onClick={callback}>{title}</button>
  );
}

export default button;
