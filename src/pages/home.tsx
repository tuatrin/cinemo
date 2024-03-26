import React, { useState, useEffect } from 'react'
import { Container, Grid, Modal } from '@mui/material'
import MovieCard from '../components/movie/movieCard.component'
import { MoviesInt } from '../interfaces/movie.interface'
import MovieDetailCard from '../components/movie/movieDetailCard.component'
import { useDispatch } from 'react-redux'
import { addFavoriteMovie } from '../redux/user/user.slice'

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<MoviesInt[] | null>(null)
  const [selectedMovie, setSelectedMovie] = useState<MoviesInt | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://www.majorcineplex.com/apis/get_movie_avaiable'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch movies')
        }
        const data = await response.json()
        setMovies(data.movies)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  const handleOpenModal = (movie: MoviesInt) => {
    setSelectedMovie(movie)
    setModalOpen(true)
  }

  const handleAddToFavorite = (movieId: number) => {
    dispatch(addFavoriteMovie(movieId))
  }

  return (
    <Container sx={{ paddingY: '24px' }}>
      {movies !== null ? (
        <Grid
          container
          spacing={3}
        >
          {movies.map((movie: MoviesInt) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={movie.id}
              onClick={() => handleOpenModal(movie)}
            >
              <MovieCard
                title_th={movie.title_th}
                rating={movie.rating}
                duration={movie.duration}
                widescreen_url={
                  movie.widescreen_url ? movie.widescreen_url : ''
                }
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <p>Loading...</p>
      )}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ paddingX: '20%' }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {selectedMovie && (
            <MovieDetailCard
              movie={selectedMovie}
              onFavorite={() => handleAddToFavorite(selectedMovie.id)}
            />
          )}
        </div>
      </Modal>
    </Container>
  )
}

export default HomePage
