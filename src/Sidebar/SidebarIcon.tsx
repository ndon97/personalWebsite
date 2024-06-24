type SidebarIconProps = {
  icon: React.ReactNode;
};

export default function SidebarIcon({ icon }: SidebarIconProps) {
  return <div className="sidebar-icon">{icon}</div>;
}
