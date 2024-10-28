import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './Root';
import Item from './Components/Item';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/Item" element={<Item />} />
          

          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
