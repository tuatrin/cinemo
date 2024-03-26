import React, { useState } from 'react'
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
} from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { MoviesInt } from '../../interfaces/movie.interface'
import { makeStyles } from 'tss-react/mui'

interface Props {
  movie: MoviesInt
  onFavorite: () => void
}

const useStyles = makeStyles()(() => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      width: 0,
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },
  heartIcon: {
    position: 'absolute',
    top: '8px',
    right: '8px',
  },
  content: {
    position: 'relative',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  text: {
    marginBottom: '8px',
  },
}))

const MovieDetailCard: React.FC<Props> = ({ movie, onFavorite }) => {
  const { classes } = useStyles()
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    onFavorite()
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        component='img'
        image={movie.poster_url}
        alt={movie.title_th}
      />
      <CardContent className={classes.content}>
        <div>
          <Typography
            variant='h5'
            component='h2'
            className={classes.text}
          >
            {movie.title_th}
          </Typography>
          <Typography
            color='textSecondary'
            className={classes.text}
          >
            {movie.title_en}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Rating: {movie.rating}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Duration: {movie.duration} minutes
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Director: {movie.director}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Actor: {movie.actor}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Genre: {movie.genre}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Release Date: {movie.release_date}
          </Typography>
          <Typography
            variant='body2'
            component='p'
            className={classes.text}
          >
            Synopsis: {movie.synopsis_th}
          </Typography>
        </div>
        <IconButton
          onClick={toggleFavorite}
          className={classes.heartIcon}
          style={{ color: isFavorite ? 'red' : 'gray' }}
        >
          <Favorite style={{ fontSize: '48px' }} />
        </IconButton>
      </CardContent>
    </Card>
  )
}

export default MovieDetailCard
