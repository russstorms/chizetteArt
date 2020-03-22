import React from 'react'
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"

import { CrudContext } from "../../context/crudContext"

// Contexts
const { open, severity, message } = useContext(CrudContext)

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}))

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return
  }

  setOpen(false)
}

const Snackbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

