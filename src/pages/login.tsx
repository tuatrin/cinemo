import React, { useState } from 'react'
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LockIcon from '@mui/icons-material/Lock'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/user/user.slice'

interface LoginForm {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState<LoginForm>({
    username: '',
    password: '',
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleLogin = () => {
    const { REACT_APP_USERNAME, REACT_APP_PASSWORD } = process.env

    if (
      formData.username === REACT_APP_USERNAME &&
      formData.password === REACT_APP_PASSWORD
    ) {
      dispatch(setUser({ username: formData.username, session: true }))
    } else {
      window.alert('Login failed. Please check your username and password.')
    }
  }

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleLogin()
    }
  }

  const useStyles = makeStyles()({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0d47a1',
      color: '#ffffff',
    },
    card: {
      width: '80%',
      maxWidth: 600,
      padding: '2rem',
      backgroundColor: '#f0f0f0',
      boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)',
    },
    textField: {
      marginBottom: '1.5rem',
    },
    button: {
      marginTop: '1.5rem',
    },
    cinemoText: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '2rem',
    },
    icon: {
      fontSize: '2rem',
      marginRight: '1rem',
    },
  })

  const { classes } = useStyles()

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.cinemoText}
            style={{ color: '#000000' }}
          >
            CINEMO
          </Typography>
          <Box
            display='flex'
            alignItems='center'
            className={classes.textField}
          >
            <AccountCircleIcon className={classes.icon} />
            <TextField
              name='username'
              label='Username'
              variant='outlined'
              fullWidth
              value={formData.username}
              onChange={handleInputChange}
              InputProps={{
                style: { color: '#000000' },
              }}
            />
          </Box>
          <Box
            display='flex'
            alignItems='center'
            className={classes.textField}
          >
            <LockIcon className={classes.icon} />
            <TextField
              name='password'
              label='Password'
              variant='outlined'
              type='password'
              fullWidth
              value={formData.password}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              InputProps={{
                style: { color: '#000000' },
              }}
            />
          </Box>
          <Button
            variant='contained'
            color='primary'
            fullWidth
            className={classes.button}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default LoginPage
