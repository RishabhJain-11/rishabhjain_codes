import './App.css';
import Banner from './components/Banner';
import Blog from './components/Blog';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Features from './components/Features';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Headers';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <Features/>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <Banner/>
    {/* <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr> */}
    <Gallery/>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <Blog/>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <FAQ/>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <CTA/>
    <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
    <Footer/>
    </>
  );
}

export default App;
