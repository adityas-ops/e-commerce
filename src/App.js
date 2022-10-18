import React from 'react'
import "./App.css";
import { Box } from '@material-ui/core'
import Home from './home/Home';
// import { Routes, Route } from 'react-router-dom';
import Navigation from './home/Navigation/Navigation';
import Footer from './Footer';
import Collections from './Collections/Collections';
import Show from './Show';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'

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

          </Routes>
          <Footer />
        </Wrapper>


      </Box>
    </>
  )
}

export default App