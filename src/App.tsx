import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import defaultTheme from './defaultTheme'

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={defaultTheme}>
        <header className='App-header'>
          <img
            src={logo}
            className='App-logo'
            alt='logo'
          />
          <Counter />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className='App-link'
              href='https://reactjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React
            </a>
            <span>, </span>
            <a
              className='App-link'
              href='https://redux.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Redux
            </a>
            <span>, </span>
            <a
              className='App-link'
              href='https://redux-toolkit.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className='App-link'
              href='https://react-redux.js.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              React Redux
            </a>
          </span>
        </header>
      </ThemeProvider>
    </div>
  )
}

export default App
