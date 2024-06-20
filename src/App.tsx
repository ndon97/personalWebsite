import SideBar from "./Sidebar/Sidebar";

export default function App() {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <h1>test</h1>
      </div>
      <div>
        <h1 className="text-xl font-bold text-red-500">Hello world!</h1>
      </div>
    </div>
  );
}
