type SidebarItemProps = {
  title: string;
};

export default function SidebarItem({ title }: SidebarItemProps) {
  return (
    <div className="p-3">
      <p>{title}</p>
    </div>
  );
}
