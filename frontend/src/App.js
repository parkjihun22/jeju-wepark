import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { RecoilRoot } from 'recoil';

import Main from './pages/Main/Main';

import Brand1 from './pages/Brand/Brand1';
import Brand2 from './pages/Brand/Brand2';

import BusinessGuide1 from './pages/BusinessGuide/BusinessGuide1';
import BusinessGuide2 from './pages/BusinessGuide/BusinessGuide2';
import BusinessGuide3 from './pages/BusinessGuide/BusinessGuide3';

import LocationEnvironment1 from './pages/LocationEnvironment/LocationEnvironment1';
import LocationEnvironment2 from './pages/LocationEnvironment/LocationEnvironment2';

import ComplexGuide1 from './pages/ComplexGuide/ComplexGuide1';
import ComplexGuide2 from './pages/ComplexGuide/ComplexGuide2';
import ComplexGuide3 from './pages/ComplexGuide/ComplexGuide3';

import FloorPlan1 from './pages/FloorPlan/FloorPlan1';
import FloorPlan2 from './pages/FloorPlan/FloorPlan2';
import FloorPlan3 from './pages/FloorPlan/FloorPlan3';
import FloorPlan4 from './pages/FloorPlan/FloorPlan4';
import FloorPlan5 from './pages/FloorPlan/FloorPlan5';
import FloorPlan6 from './pages/FloorPlan/FloorPlan6';
import FloorPlan7 from './pages/FloorPlan/FloorPlan7';
import FloorPlan8 from './pages/FloorPlan/FloorPlan8';

import Interior1 from './pages/Interior/Interior1';
import Interior2 from './pages/Interior/Interior2';
import Interior3 from './pages/Interior/Interior3';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path="/Brand/intro" element={<Brand1 />} />
          <Route path="/Brand/video" element={<Brand2 />} />

          <Route path="/BusinessGuide/intro" element={<BusinessGuide1 />} />
          <Route path="/BusinessGuide/plan" element={<BusinessGuide2 />} />
          <Route path="/BusinessGuide/documents" element={<BusinessGuide3 />} />

          <Route path="/LocationEnvironment/intro" element={<LocationEnvironment1 />} />
          <Route path="/LocationEnvironment/primium" element={<LocationEnvironment2 />} />
          
          <Route path="/ComplexGuide/intro" element={<ComplexGuide1 />} />
          <Route path="/ComplexGuide/detailintro" element={<ComplexGuide2 />} />
          <Route path="/ComplexGuide/community" element={<ComplexGuide3 />} />

          <Route path="/FloorPlan/59A" element={<FloorPlan1 />} />
          <Route path="/FloorPlan/59B" element={<FloorPlan2 />} />
          <Route path="/FloorPlan/108A" element={<FloorPlan3 />} />
          <Route path="/FloorPlan/108B" element={<FloorPlan4 />} />
          <Route path="/FloorPlan/129" element={<FloorPlan5 />} />
          <Route path="/FloorPlan/166P" element={<FloorPlan6 />} />
          <Route path="/FloorPlan/183P" element={<FloorPlan7 />} />
          <Route path="/FloorPlan/197P" element={<FloorPlan8 />} />
          
          <Route path="/Interior/59A" element={<Interior1 />} />
          <Route path="/Interior/84A" element={<Interior2 />} />
          <Route path="/Interior/84B" element={<Interior3 />} />
          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
