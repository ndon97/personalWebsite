import SideBar from './Sidebar/Sidebar';
import HeroBanner from './HeroBanner/HeroBanner';
import MyJourney from './MyJourney/MyJourney';

export default function App() {
  return (
    <div className="flex justify-between bg-slate-100">
      <SideBar />
      <div className="flex flex-col">
        <HeroBanner />
        <MyJourney />
      </div>
    </div>
  );
}
