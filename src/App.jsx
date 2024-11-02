import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './Root';
import Item from './Components/Item';
import Instant from './Components/Instant';
import Proceed from './Components/Proceed';
import Plan from './Components/Plan';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/Item" element={<Item />} />
          <Route path="/Instant" element={<Instant />} />
          <Route path="/Proceed" element={<Proceed />} />
          <Route path="/Plan" element={<Plan />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
