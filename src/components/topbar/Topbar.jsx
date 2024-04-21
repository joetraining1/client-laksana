import { AppBar } from '@mui/material'
import React from 'react'
import { Colors } from '../../constant/Colors'
import MassWidth from '../../lib/parts/MassWidth/MassWidth'
import Logo from './Logo/Logo'
import Sides from './Sides/Sides'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const employee = useSelector((state) => state.auth.authState)

  return (
    <AppBar sx={{
        height: '6vh',
        width: '100%',
        backgroundColor: Colors.navbar2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <MassWidth styles={{
        gap: '1vw',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Logo />
        {employee.email !== "" && <Sides />}
      </MassWidth>
    </AppBar>
  )
}

export default Topbar
