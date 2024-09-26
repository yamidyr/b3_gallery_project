import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Dibujo1 } from './components/Dibujo1';
import { Dibujo2 } from './components/Dibujo2';
import { Dibujo3 } from './components/Dibujo3';
import { Dibujo4 } from './components/Dibujo4';
import { Dibujo5 } from './components/Dibujo5';
import { Dibujo6 } from './components/Dibujo6';
import { Navigation } from './components/Navigation';

function App() {

  return (
    <>
      <BrowserRouter>
      <div>
        <h1 className = 'text-center my-3'>Gallery Project</h1>
      </div>
      <div className = 'container d-flex justify-content-center'>
        <Routes>
          <Route path = '/dibujo1' element = { <Dibujo1  className = 'main-img-container'/> }/>
          <Route path = '/dibujo2' element = { <Dibujo2  className = 'main-img-container'/> }/>
          <Route path = '/dibujo3' element = { <Dibujo3  className = 'main-img-container'/> }/>
          <Route path = '/dibujo4' element = { <Dibujo4  className = 'main-img-container'/> }/>
          <Route path = '/dibujo5' element = { <Dibujo5  className = 'main-img-container'/> }/>
          <Route path = '/dibujo6' element = { <Dibujo6  className = 'main-img-container'/> }/>
        </Routes>
      </div>
      <div className = 'container'>
        <Navigation/>
      </div>
      </BrowserRouter>
    </>
  );
};

export default App
