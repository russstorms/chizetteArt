import { useState } from 'react'

export default initialFilteredTermState => {
  const [filteredTerm, setFilteredTerm] = useState(initialFilteredTermState)

  return {
    filteredTerm,
    // Alter filteredTerm based on Drawer
    configureFilteredTerm: (ev) => {
      ev.preventDefault()
      // Check if filter came from splashlist or drawer
      let updateFilteredTerm = 
          ev.currentTarget.dataset.medium
          || ev.currentTarget.children[0].innerText

      if (updateFilteredTerm === 'All') {
        setFilteredTerm('All')
      } else if (updateFilteredTerm === 'Art') {
        setFilteredTerm('Art')
      } else if (updateFilteredTerm === 'Jewelry') {
        setFilteredTerm('Jewelry')
      } else if (updateFilteredTerm === 'Photos'){
        setFilteredTerm('Photos')
      } else {
        setFilteredTerm('All')
      }
    }
  }
}

