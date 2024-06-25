import Timeline from './Timeline/TimeLine';
export default function MyJourney() {
  return (
    <div className="flex h-screen w-full flex-col justify-center pl-10 pr-10">
      <h1 className="mb-8 text-center text-4xl font-medium text-teal-600">My Journey</h1>
      <Timeline />
    </div>
  );
}
