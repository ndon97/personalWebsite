type SkillsCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export default function SkillsCard({ icon, title, description }: SkillsCardProps) {
  return (
    <div className="flex w-80 flex-col items-center rounded-lg border p-8 shadow-md">
      <div className="rounded-full bg-indigo-100 p-3">{icon}</div>
      <h2 className="mb-3 mt-6 font-medium uppercase text-indigo-500">{title}</h2>
      <p className="mb-3 text-center text-sm font-light text-gray-500">{description}</p>
    </div>
  );
}
