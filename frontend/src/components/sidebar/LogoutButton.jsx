import React from 'react'
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {
  const {logout} = useLogout()
  return (
    <div>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default LogoutButton