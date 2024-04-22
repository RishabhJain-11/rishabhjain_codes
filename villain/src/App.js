import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import AboutMe from './components/AboutMe';
import Arsenal from './components/Arsenal';
import Merchandise from './components/Merchandise';
import Gigs from './components/Gigs';
import Profile from './components/Profile';
import AboutSection from "./components/Other Profile Sections/AboutSection";
import Tools from './components/Other Profile Sections/Tools';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <AboutSection></AboutSection>
      <Tools></Tools>
      {/* <Blogs></Blogs> */}
      {/* <AboutMe></AboutMe> */}
      {/* <Arsenal></Arsenal> */}
      {/* <Merchandise></Merchandise> */}
      {/* <Gigs></Gigs> */}
      <Footer></Footer>
    </>
  );
}

export default App;
