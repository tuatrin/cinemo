import React, { useEffect, useState } from 'react'
import { Container, Grid, Modal } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import MovieCard from '../../components/movie/movieCard.component'
import MovieDetailCard from '../../components/movie/movieDetailCard.component'
import { MoviesInt } from '../../interfaces/movie.interface'

const FavoritePage: React.FC = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<MoviesInt[]>([])
  const [selectedMovie, setSelectedMovie] = useState<MoviesInt | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const favoriteMovieIds = useSelector(
    (state: RootState) => state.user.favoriteMovies
  )

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      try {
        const response = await fetch(
          'https://www.majorcineplex.com/apis/get_movie_avaiable'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch favorite movies')
        }
        const data = await response.json()

        const filteredMovies = data.movies.filter((movie: MoviesInt) =>
          favoriteMovieIds.includes(movie.id)
        )
        setFavoriteMovies(filteredMovies)
      } catch (error) {
        console.error('Error fetching favorite movies:', error)
      }
    }

    fetchFavoriteMovies()
  }, [favoriteMovieIds])

  const handleOpenModal = (movie: MoviesInt) => {
    setSelectedMovie(movie)
    setModalOpen(true)
  }

  return (
    <Container sx={{ paddingY: '24px' }}>
      {favoriteMovies.length > 0 ? (
        <Grid
          container
          spacing={3}
        >
          {favoriteMovies.map((movie: MoviesInt) => (
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
        <p>No favorite movies found.</p>
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
              onFavorite={() => {}}
            />
          )}
        </div>
      </Modal>
    </Container>
  )
}

export default FavoritePage
