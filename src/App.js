import React from 'react';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import HomeScreen  from './pages/HomeScreen';
import Phone  from './pages/Phone';
import Navigation  from './pages/Navigation';
import Car  from './pages/Car';
import Radio  from './pages/Radio';
import Indicators  from './pages/Indicators';
import Settings  from './pages/Settings';


function App() {
  return (
    <Router>
    <div className="App">
      
     
      <div className="content">
        <Routes>
        <Route path="/"  element={<HomeScreen />}/>
        <Route path="/0"  element={<HomeScreen />}/>
        <Route path="/1" element={<Car />}/>
        <Route path="/2" element={<Indicators />}/>
        <Route path="/3" element={<Radio />}/>
        <Route path="/4" element={<Navigation />}/>
        <Route path="/5" element={<Phone />}/>
        <Route path="/6" element={<Settings />}/>
    

        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
