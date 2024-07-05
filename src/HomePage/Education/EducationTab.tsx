type EducationTabProps = {
  title: string;
  degree: string;
  description?: string;
};

export default function EducationTab({ title, degree, description }: EducationTabProps) {
  return (
    <div>
      <h2 className="secondary-heading mb-3 mt-6 font-medium uppercase">{title}</h2>
      <ul className="list-inside list-disc text-gray-400">
        <li className="text-s mb-3">{degree}</li>
      </ul>
      <p className="text-sm">{description}</p>
    </div>
  );
}
