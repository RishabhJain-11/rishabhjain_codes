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
import Projects from './components/Other Profile Sections/Projects';
import Education from './components/Other Profile Sections/Education';
import Resume from './components/Other Profile Sections/Resume';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Profile></Profile>
      <AboutSection></AboutSection>
      <Education></Education>
      <Projects></Projects>
      <Tools></Tools>
      <Resume></Resume>
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
