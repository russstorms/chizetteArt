import { useState } from 'react';

export default (initialSecretLogInState) => {
  const [secretLogIn, setSecretLogIn] = useState(initialSecretLogInState);

  return {
    secretLogIn,
    // Admin — Toggle login form
    toggleLoginForm: () => {
      setSecretLogIn(!secretLogIn);
    },
  };
};
