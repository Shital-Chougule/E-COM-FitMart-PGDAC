import { Suspense } from 'react';
import './App.css';
import adminRoutes from './components/Admin/routes';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userRoutes from './components/User/routes';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
       
        <Routes>
            {
              adminRoutes.map((route,index)=>(
                <Route key = {index} path = {route.path} element = {<route.component />} />
              ))
            },
            {
              userRoutes.map((route,index)=>(
                <Route key = {index} path = {route.path} element = {<route.component />} />
              ))
            }

        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
// By Rahul Borse