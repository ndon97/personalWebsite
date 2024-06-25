type ExperienceTabProps = {
  title: string;
  role: string;
  description: string;
  points: string[];
};

export default function ExperienceTab({ title, role, description, points }: ExperienceTabProps) {
  return (
    <div>
      <h2 className="mb-3 mt-6 font-medium uppercase text-indigo-900">{title}</h2>
      <h3 className="text-s mb-3 text-gray-500">{role}</h3>
      <h4 className="mb-4 text-sm italic">{description}</h4>
      <ul className="list-inside list-disc">
        {points.map((point) => (
          <li key={point} className="text-s mb-3">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
