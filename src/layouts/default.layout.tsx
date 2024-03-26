import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { makeStyles } from 'tss-react/mui'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Divider,
  Avatar,
} from '@mui/material'
import {
  AccountCircle as AccountCircleIcon,
  Lock as LockIcon,
  Search as SearchIcon,
  Favorite as FavoriteIcon,
} from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { clearUser } from '../redux/user/user.slice'
import { RootState } from '../redux/store'

const drawerWidth = 240

const DefaultLayout: React.FC = () => {
  const username = useSelector((state: RootState) => state.user.username)
  const useStyles = makeStyles()((theme) => ({
    root: {
      display: 'flex',
      height: '100vh',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#0d47a1',
    },
    content: {
      flexGrow: 1,
      overflow: 'auto',
      backgroundColor: '#000000',
    },
    menuTitle: {
      textAlign: 'center',
      marginTop: theme.spacing(2),
      cursor: 'pointer',
      fontSize: '2rem',
      color: '#ffffff',
      fontWeight: 700,
    },
    userCard: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(2),
      backgroundColor: '#1565c0',
      color: '#ffffff',
    },
    avatar: {
      marginRight: theme.spacing(2),
    },
    menuBottom: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
    },
  }))

  const { classes } = useStyles()
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleMovieFinderClick = () => {
    navigate('/movie')
  }

  const handleMyFavoriteClick = () => {
    navigate('/movie/favorite')
  }

  const handleLogout = () => {
    dispatch(clearUser())
    window.location.href = '/'
  }

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        open
      >
        <Box
          p={2}
          className={classes.menuTitle}
        >
          <Typography variant='h6'>CINEMO</Typography>
        </Box>
        <Box className={classes.userCard}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography variant='body1'>{username}</Typography>
        </Box>
        <List>
          <ListItem
            button
            onClick={handleMovieFinderClick}
          >
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary='Movie Finder' />
          </ListItem>
          <ListItem
            button
            onClick={handleMyFavoriteClick}
          >
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary='My Favorite' />
          </ListItem>
        </List>
        <Divider />
        <List className={classes.menuBottom}>
          <ListItem
            button
            onClick={handleLogout}
          >
            <ListItemIcon>
              <LockIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </List>
      </Drawer>

      <main className={classes.content}>
        <Outlet />
      </main>
    </div>
  )
}

export default DefaultLayout
