import React from 'react'
import { Card, CardContent, Typography, CardMedia } from '@mui/material'
import { makeStyles } from 'tss-react/mui'
import { MovieCardInt } from '../../interfaces/movie.interface'

const useStyles = makeStyles()({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  media: {
    paddingTop: '56.25%',
  },
})

const MovieCard: React.FC<MovieCardInt> = ({
  title_th,
  rating,
  duration,
  widescreen_url,
}) => {
  const { classes } = useStyles()

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={widescreen_url}
        title={title_th}
      />
      <CardContent>
        <Typography
          variant='h6'
          component='h2'
        >
          {title_th}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
        >
          Rating: {rating}
        </Typography>
        <Typography
          variant='subtitle1'
          color='textSecondary'
        >
          Duration: {duration} minutes
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MovieCard
