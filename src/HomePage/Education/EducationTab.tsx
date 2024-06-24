type EducationTabProps = {
  title: string;
  description: string;
};

export default function EducationTab({ title, description }: EducationTabProps) {
  return (
    <div>
      <h2 className="mb-3 mt-6 font-medium uppercase text-indigo-500">{title}</h2>
      <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
        <li className="mb-3 text-sm font-light text-gray-500">{description}</li>
      </ul>
    </div>
  );
}
