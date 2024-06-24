import SideBar from './Sidebar/Sidebar';
import HeroBanner from './HeroBanner/HeroBanner';

export default function App() {
  return (
    <div className="flex justify-between bg-slate-100">
      <SideBar />
      <HeroBanner />
    </div>
  );
}
