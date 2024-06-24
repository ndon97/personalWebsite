import SidebarIcon from './SidebarIcon';
import { FaFire } from 'react-icons/fa';

export default function SideBar() {
  return (
    <div className="left-0 top-0 flex h-screen w-16 flex-col bg-gray-900 text-white shadow-lg">
      <SidebarIcon icon={<FaFire size="28" />} />
    </div>
  );
}
