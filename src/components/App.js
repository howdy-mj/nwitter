import React, { useEffect, useState } from 'react';
import Router from 'components/Router';
import { authService } from 'fBase';

function App() {
  const [init, setInit] = useState(false); // firebase init 기다리기
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // log in, log out 상태 체크해주는 것
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <Router isLoggedIn={isLoggedIn} /> : 'initializing...'}
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
