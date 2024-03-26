import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

interface IProps {
  children: React.ReactNode
}

const PublicRoute: React.FC<IProps> = (props) => {
  const { children } = props
  const session = useSelector((state: RootState) => state.user.session)

  return !session ? <div>{children}</div> : <Navigate to='/' />
}

export default PublicRoute
