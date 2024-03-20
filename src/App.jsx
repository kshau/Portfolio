import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';

function App() {

 return (
    <>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>

          <Route path="/projects" element={<Projects/>}/>
          <Route path="/achievements" element={<Achievements/>}/>

       </Routes>
    </>
 );

};

export default App;