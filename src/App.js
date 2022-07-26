import './App.css';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';
import Events from './components/events/events';
import AboutUs from './components/aboutUs/aboutUs';
import BeAMember from './components/BecomeMember/beAMember';
import Footer from './components/footer/footer';
import History from './components/history/history';
import UpcomingEvents from './components/upcomingEvents/upcomingEvents';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/events" element={<Events/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/be-a-member" element={<BeAMember/>}/>
        <Route path="/footer" element={<Footer/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/upcoming-events" element={<UpcomingEvents/>}/>
      </Routes>
    </Router>
  );
}

export default App;
