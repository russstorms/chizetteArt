import { useState } from 'react';

export default (initialContactState) => {
  const [contactMe, setContactMe] = useState(initialContactState);

  return {
    contactMe,
    // Toggle contact form
    toggleContactMe: () => {
      if (!contactMe) {
        document
          .getElementById('contact')
          .scrollIntoView({ behavior: 'smooth' });
        setContactMe(!contactMe);
      } else {
        setContactMe(contactMe);
      }
    },
  };
};
