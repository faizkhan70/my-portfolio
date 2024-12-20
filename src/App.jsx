import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Component/Main';
import Page1 from './pages/page1/Page1';
import Page2 from './pages/page2/Page2';
import Nav from './Component/nav/Nav';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
const App = () => {
  return (
 <>
     <BrowserRouter>
     <Nav/>
         <Routes>
           <Route path='*' element={<Main/>}/>
           <Route path='/page1' element={<Page1/>}/>
           <Route path='/page2' element={<Page2/>}/>
           <Route path='/page3' element={<Page3/>}/>
           <Route path='/page4' element={<Page4/>}/>
         </Routes>    
      </BrowserRouter>
     </>
  );
}

export default App;
