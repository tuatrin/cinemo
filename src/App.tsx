import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import defaultTheme from './defaultTheme'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/login'
import DefaultLayout from './layouts/default.layout'
import HomePage from './pages/home'
import FavoritePage from './pages/movie/favorite'
import PublicRoute from './routes/publicRoute'
import AuthRoute from './routes/authRoute'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route
            path='/'
            element={<AuthRoute />}
          >
            <Route
              path='/movie'
              element={<DefaultLayout />}
            >
              <Route
                index
                element={<HomePage />}
              />
              <Route
                path='favorite'
                element={<FavoritePage />}
              />
            </Route>
          </Route>
          <Route
            path='/login'
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  )
}

export default App
