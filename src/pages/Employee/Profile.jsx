import React from 'react'
import { useParams } from 'react-router-dom'
import PageContainer from '../../components/PageContainer/PageContainer'

const Profile = () => {
  const { email } = useParams()

  return (
    <PageContainer>
      Profile
    </PageContainer>
  )
}

export default Profile
