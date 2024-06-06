import { Routes, Route, Link, Navigate } from 'react-router-dom';

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

          <Route path="/playlist" element={<Navigate to="https://open.spotify.com/playlist/7udkrVtvo7SNLvEtoXym0P?si=6963426aec9a4103"/>}/>

       </Routes>
    </>
 );

};

export default App;
