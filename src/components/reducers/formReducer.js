import { useReducer } from "react"

function formReducer(initialState, reducer) {
  const [state, dispatch] = useReducer(initialState, reducer)

  const reducer = (state, { field, value }) => {
    return {
      ...state,
      [field]: value
    }
  }
  
  return [state, dispatch]
}

export { formReducer }

