import React, { useState, createContext } from 'react'
import { Switch, FormGroup } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [checked, setChecked] = useState(false)

  const toggleChecked = () => {
    setChecked(prev => !prev)
  }

  const ThemeSwitch = (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch 
            checked={checked}
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
        checked,
        ThemeSwitch,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}

