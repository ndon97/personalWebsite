import SidebarItem from './SidebarItem';

export default function SideBar() {
  return (
    <div className="sticky left-0 top-0 flex h-screen w-40 flex-col bg-gray-600 text-white shadow-lg">
      <div className="mt-10">
        <SidebarItem title="Home" />
        <SidebarItem title="About Me" />
        <SidebarItem title="My Journey" />
        <SidebarItem title="Skills" />
        <SidebarItem title="Experience" />
        <SidebarItem title="Education" />
        <SidebarItem title="Contact Me" />
      </div>
    </div>
  );
}
