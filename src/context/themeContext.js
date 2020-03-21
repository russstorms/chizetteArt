import React, { useState, createContext } from 'react'
import { Switch, FormGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [plantTheme, setPlantTheme] = useState(false)

  const toggleChecked = () => {
    setPlantTheme(prev => !prev)
  }

  const crystalThemeStyles = {
    backgroundColor: '#FFFFFF',
    color: 'rgb(99, 95, 84)',
  }

  const plantThemeStyles = {
    backgroundColor: '#fff1e0',
    color: '#007500',
  }

  const ThemeSwitch = (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch 
            checked={plantTheme}
            onChange={toggleChecked}
            color="primary"
          />
        }
        label="Plant Theme"
      />
    </FormGroup>
  )

  return (
    <ThemeContext.Provider
      value={{
        crystalThemeStyles,
        plantThemeStyles,
        plantTheme,
        ThemeSwitch,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

