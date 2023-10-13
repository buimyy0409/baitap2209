import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
        <h1>Profile</h1>
        <Link to={'/'}>Go to home</Link>
        <Link to={'/posts'}>Go to post</Link>
    </div>
  )
}

export default Profile