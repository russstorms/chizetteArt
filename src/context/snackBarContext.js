import React, {
  createContext,
  useState,
} from "react"

export const SnackbarContext = createContext()

export function SnackbarProvider(props) {

  // Snackbar State
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState("info")
  const [message, setMessage] = useState("")

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
  
    setOpen(false)
  }

  return (
    <SnackbarContext.Provider
      value={{
        open,
        setOpen,
        severity,
        setSeverity,
        message,
        setMessage,
        handleClose
      }}
    >
      {props.children}
    </SnackbarContext.Provider>
  )
}

