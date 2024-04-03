import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

const Main = () => {
    const employee = useSelector((state) => state.auth.authState)
    const navigate = useNavigate()

    employee.email === "" && navigate('/login')

  return (
    <Outlet />
  )
}

export default Main
