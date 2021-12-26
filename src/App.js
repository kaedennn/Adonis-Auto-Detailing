import React, {useEffect} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Navigation from './components/navigation/navigation.component';
import Footer from './components/footer/footer.component';

import Homepage from './pages/homepage/homepage.component';
import Gallery from './pages/gallery/gallery.component';
import Contact from './pages/contact/contact.component';
import WashAndWax from './pages/detail-services/wash-and-wax.component';
import PremierWash from './pages/detail-addons/premier-carwash.component';
import PaintEnhancement from './pages/detail-services/paint-enhancement-componet';
import CompleteDetail from './pages/detail-services/complete-detail.component';
import BasicDetail from './pages/detail-addons/basic-detail.component';
import DeepInteriorDetail from './pages/detail-services/interior-detail.component';
import EngineBay from './pages/detail-addons/engine-bay.component';
import HeadlightRestoration from './pages/detail-addons/headlight-restoration.component';
import OderRemoval from './pages/detail-addons/oder-removal.component';
import SmokeRemoval from './pages/detail-addons/smoke-oder-removal.component';
import CeramicCoating from './pages/detail-addons/ceramic-coating.component';
import Queens from './pages/locations/queens.component';
import Flushing from './pages/locations/flushing.component';
import FAQ from './pages/faq/faq.component';
import MobileDetailing from './pages/mobile-detailing/mobile-detailing.component';
import Testimonials from './pages/testimonials/testimonials.component';
import About from './pages/about/about.component';

import './App.css';

function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return null;
  }

  return (
    <div>
      <ScrollToTop/>
      <Navigation/>
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='adonis-wash-and-wax' element={<WashAndWax/>}/>
        <Route path='premier-wash' element={<PremierWash/>}/>
        <Route path='paint-enhancement' element={<PaintEnhancement/>}/>
        <Route path='complete-detail' element={<CompleteDetail/>}/>
        <Route path='deep-interior-detail' element={<DeepInteriorDetail/>}/>
        <Route path='basic-detail' element={<BasicDetail/>}/>
        <Route path='engine-bay' element={<EngineBay/>}/>
        <Route path='headlight-restoration' element={<HeadlightRestoration/>}/>
        <Route path='odor-removal' element={<OderRemoval/>}/>
        <Route path='smoke-removal' element={<SmokeRemoval/>}/>
        <Route path='ceramic-coating' element={<CeramicCoating/>}/>
        <Route path='queens' element={<Queens/>}/>
        <Route path='flushing' element={<Flushing/>}/>
        <Route path='faq' element={<FAQ/>}/>
        <Route path='mobile-detailing' element={<MobileDetailing/>}/>
        <Route path='testimonials' element={<Testimonials/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
