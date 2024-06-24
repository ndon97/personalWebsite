import Timeline from './Timeline/TimeLine';
export default function MyJourney() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-10">
      <h1 className="mb-2 text-4xl font-bold">My Journey</h1>
      <Timeline />
    </div>
  );
}
