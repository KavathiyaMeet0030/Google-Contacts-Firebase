import React, { useEffect } from 'react'
import MainContainer from '../../Container/MainContainer/MainContainer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

function Home() {

  const {isLogin} = useSelector (state => state.ThunkReducers)

  const Navigate = useNavigate()

  useEffect(()=>{

    if(!isLogin){
      Navigate(`/login`)
    }

  },[isLogin])

  return (
    <>


     
      <MainContainer/>
    
   
      
    </>
  )
}

export default Home
