import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const AuthRoute: React.FC = () => {
  const session = useSelector((state: RootState) => state.user.session)
  const navigate = useNavigate()

  React.useEffect(() => {
    if (!session) {
      return navigate('/login')
    } else {
      return navigate('/movie')
    }
  }, [session])
  return <Outlet />
}

export default AuthRoute
