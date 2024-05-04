import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Home';
import { CreatePage } from './Create';
import { ReadPage } from './Read';
import { UpdatePage } from './Update';



function App() {
  return (
    <>
   
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<CreatePage/>}/>
          <Route path='/read/:id' element={<ReadPage/>}/>
          <Route path='/update/:id' element={<UpdatePage/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
