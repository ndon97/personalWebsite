type SkillsCardProps = {
  svg: JSX.Element;
  title: string;
  description: string;
};

export default function SkillsCard({ svg, title, description }: SkillsCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg border p-8 shadow-md">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-100 p-3 text-indigo-500 shadow-2xl">
        {svg}
      </div>
      <h2 className="mb-3 mt-6 font-medium uppercase text-indigo-500">{title}</h2>
      <p className="mb-3 text-sm font-light text-gray-500">{description}</p>
    </div>
  );
}
