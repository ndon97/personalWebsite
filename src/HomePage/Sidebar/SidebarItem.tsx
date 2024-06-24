type SidebarItemProps = {
  icon: JSX.Element;
  title: string;
  onClick: () => void;
};

export default function SidebarItem({ icon, title, onClick }: SidebarItemProps) {
  return (
    <button onClick={onClick}>
      <div className="border-b-3 flex items-center border-red-600 p-3">
        {icon}
        <p>{title}</p>
      </div>
    </button>
  );
}
