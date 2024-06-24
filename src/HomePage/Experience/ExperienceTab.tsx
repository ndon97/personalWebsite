type ExperienceTabProps = {
  title: string;
  description: string[];
};

export default function ExperienceTab({ title, description }: ExperienceTabProps) {
  return (
    <div>
      <h2 className="mb-3 mt-6 font-medium uppercase text-indigo-500">{title}</h2>
      <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
        {description.map((desc) => (
          <li key={desc} className="mb-3 text-sm font-light text-gray-500">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
