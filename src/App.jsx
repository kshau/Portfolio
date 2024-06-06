import { Routes, Route, Link, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Redirect from './pages/Redirect';

function App() {

 return (
    <>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>

          <Route path="/projects" element={<Projects/>}/>
          <Route path="/achievements" element={<Achievements/>}/>

          <Route path="/playlist" render={() => <Redirect to="https://open.spotify.com/playlist/7udkrVtvo7SNLvEtoXym0P?si=6963426aec9a4103"/>}</Route>}/>

       </Routes>
    </>
 );

};

export default App;
