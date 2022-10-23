import React from 'react'
import "./App.css";
import { Box } from '@material-ui/core'
import Home from './home/Home';
// import { Routes, Route } from 'react-router-dom';
import Navigation from './home/Navigation/Navigation';
import Footer from './Footer';
import Collections from './Collections/Collections';
import Show from './Show';
import Signin from './signIn/Signin';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
// import Signup from './signUp/Signup';
import Signup from './signIn/Signup';
import Products from './Products/Products';

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}
function App() {
  return (
    <>
      <Box>
        <Navigation />

        <Wrapper>
          <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/Collections" element={<Collections />} />
            <Route path="/Show/:urlId" element={<Show />} />
            <Route path="/signIn" element={<Signin />} />
            <Route path="/signUp" element={<Signup />} />
            <Route path="/Products" element={<Products />} />
            <Route path="*" element={<h1>404</h1>} />

          </Routes>
          <Footer />
        </Wrapper>


      </Box>
    </>
  )
}

export default App