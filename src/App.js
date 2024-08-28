import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { CareerTimeline } from './components/Timeline';
import { Footer } from "./components/Footer";
import useSectionObserver from './components/SectionObserver';
import { Projects } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'react-vertical-timeline-component/style.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {

  useSectionObserver(['banner', 'aboutMe', 'projects', 'timeline']);

  return (
    <div className="App">
      <NavBar />
      <Banner id="banner" />
      <AboutMe id="aboutMe" />
      <Projects id="projects" />
      <CareerTimeline id="timeline" />
      <Footer />
    </div>
  );
}

export default App;