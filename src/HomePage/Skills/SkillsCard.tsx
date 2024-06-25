type SkillsCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
  borderColor?: string;
  backgroundColor?: string;
};

export default function SkillsCard({
  icon,
  title,
  description,
  borderColor,
  backgroundColor,
}: SkillsCardProps) {
  return (
    <div
      className={`flex w-80 flex-col items-center rounded-lg border-2 p-8 shadow-lg ${borderColor} ${backgroundColor}`}
    >
      <div className="rounded-full bg-indigo-200 p-3">{icon}</div>
      <h2 className="mb-3 mt-6 font-medium uppercase text-indigo-900">{title}</h2>
      <p className="mb-3 text-center text-sm font-light">{description}</p>
    </div>
  );
}
