import SideBar from './HomePage/Sidebar/Sidebar';
import HeroBanner from './HomePage/HeroBanner/HeroBanner';
import About from './HomePage/About/About';
import MyJourney from './HomePage/MyJourney/MyJourney';
import Skills from './HomePage/Skills/Skills';
import Experience from './HomePage/Experience/Experience';
import Education from './HomePage/Education/Education';
import ContactMe from './HomePage/ContactMe/ContactMe';

export default function App() {
  return (
    <div className="flex justify-between bg-slate-100">
      <SideBar />
      <div className="flex flex-col">
        <HeroBanner />
        <About />
        <MyJourney />
        <Skills />
        <Experience />
        <Education />
        <ContactMe />
      </div>
    </div>
  );
}
