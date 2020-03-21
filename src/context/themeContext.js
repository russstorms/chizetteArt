import React, { useState, createContext } from 'react'
import { Switch, FormGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [darkTheme, setDarkTheme] = useState(false)

  const toggleChecked = () => {
    setDarkTheme(prev => !prev)
  }

  const lightThemeStyles = {
    backgroundColor: '#FFFFFF',
    color: 'rgb(99, 95, 84)',
  }

  const darkThemeStyles = {
    backgroundColor: '#1D2831',
    color: 'white',
  }

  const ThemeSwitch = (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch 
            checked={darkTheme}
            onChange={toggleChecked}
            color="primary"
          />
        }
        label="Night Theme"
      />
    </FormGroup>
  )

  return (
    <ThemeContext.Provider
      value={{
        lightThemeStyles,
        darkThemeStyles,
        darkTheme,
        ThemeSwitch,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

