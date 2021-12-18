import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage.component';
import Gallery from './pages/gallery/gallery.component';
import WashAndWax from './pages/wash-and-wax/wash-and-wax.component';

import './App.css';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='adonis-wash-and-wax' element={<WashAndWax/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
