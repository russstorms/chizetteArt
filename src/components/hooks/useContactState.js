import { useState } from 'react'

export default initialContactState => {
  const [contactMe, setContactMe] = useState(initialContactState)
  console.log(contactMe)

  return {
    // Toggle contact form
    toggleContactMe: () => {
      if (!contactMe) {
        document.getElementById('contact').scrollIntoView({ behavior: "smooth" })
        setContactMe(!contactMe)
      } else {
        setContactMe(contactMe)
      }
    }
  }
}

