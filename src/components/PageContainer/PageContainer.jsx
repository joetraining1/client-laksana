import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageContainer = ({
    children
}) => {

    const navigate = useNavigate()
  return (
    <div>
        <Button onClick={() => navigate(-1)}>Back</Button>
      {children}
    </div>
  )
}

export default PageContainer
