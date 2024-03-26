import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  username: string
  session: boolean
  favoriteMovies: number[]
}

const initialState: UserState = {
  username: '',
  session: false,
  favoriteMovies: [],
}

const savedUserState = localStorage.getItem('user')
const initialUserState = savedUserState
  ? JSON.parse(savedUserState)
  : initialState

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ username: string; session: boolean }>
    ) => {
      state.username = action.payload.username
      state.session = action.payload.session
      localStorage.setItem('user', JSON.stringify(state))
    },
    addFavoriteMovie: (state, action: PayloadAction<number>) => {
      state.favoriteMovies.push(action.payload)
      localStorage.setItem('user', JSON.stringify(state))
    },
    clearUser: (state) => {
      state.username = ''
      state.session = false
      state.favoriteMovies = []
      localStorage.removeItem('user')
    },
  },
})

export const { setUser, addFavoriteMovie, clearUser } = userSlice.actions
export default userSlice.reducer
