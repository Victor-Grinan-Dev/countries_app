
import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import SingleItem from './components/pages/SingleItem';
import Navbar from './components/UIs/Navbar';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>   
        <Route path="/" element={<Home />} />
        <Route path="browse" element={<Browse />} />
        <Route path="browse/:single" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
