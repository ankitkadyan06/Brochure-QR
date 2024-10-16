import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
// import Brochure from './Pages/Brochure';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage/>}/>
      {/* <Route path="/brochure" element={<Brochure/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
