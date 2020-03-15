import { useReducer } from "react"

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

const FormReducer = (initialState, reducer) => {
  const [state, dispatch] = useReducer(initialState, reducer)
  
  return [state, dispatch]
}

export { FormReducer, reducer }

