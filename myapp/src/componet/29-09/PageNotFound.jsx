import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const router = useNavigate();
    useEffect(() => {
        setTimeout(() =>{
            router('/')
        }, 5000);
    },[])
  return (
    <div>
        <h1>page not found,redirecting you to home page</h1>
        <button onClick={() => router('/')}>go to home</button>
    </div>
  )
}

export default PageNotFound

