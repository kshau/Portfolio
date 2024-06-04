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

          <Route path="/playlist" element={() => {location.href = "https://open.spotify.com/playlist/7udkrVtvo7SNLvEtoXym0P?si=a180c394d59e4af1"}}/>

       </Routes>
    </>
 );

};

export default App;