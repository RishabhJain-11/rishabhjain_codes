import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Blogs></Blogs>
      {/* <AboutMe></AboutMe> */}

      <Footer></Footer>
    </>
  );
}

export default App;
