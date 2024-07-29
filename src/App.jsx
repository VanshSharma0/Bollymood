import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Happy from './pages/Happy';
import Sad from './pages/Sad';
// import Emotional from './pages/Emotional';
// import Tired from './pages/Tired';
// import Angry from './pages/Angry';
// import Romantic from './pages/Romantic';
// import Horny from './pages/Horny';
// import Energetic from './pages/Energetic';
// import Chill from './pages/Chill';
// import Cheerful from './pages/Cheerful';
// import Thrillfull from './pages/Thrillfull';
// import Humorous from './pages/Humorous';
// import './App.css';
import Navbar from './components/Navbar';
import Buttons from './components/Buttons';
import Footer from './components/Footer';
import Nopage from './pages/Nopage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<div><Navbar /><Buttons /><Footer /></div>} />
          <Route path="/home" element={<div><Navbar /><Buttons /><Footer /></div>} />
          <Route path="/happy" element={<Happy />} />
          <Route path="/sad" element={<Sad />} />
          {/* <Route path="/emotional" element={<Emotional />} />
          <Route path="/tired" element={<Tired />} />
          <Route path="/angry" element={<Angry />} />
          <Route path="/romantic" element={<Romantic />} />
          <Route path="/horny" element={<Horny />} />
          <Route path="/energetic" element={<Energetic />} />
          <Route path="/chill" element={<Chill />} />
          <Route path="/cheerful" element={<Cheerful />} />
          <Route path="/thrillfull" element={<Thrillfull />} />
          <Route path="/humorous" element={<Humorous />} />
          <Route path="*" element={<Nopage />} />  */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
