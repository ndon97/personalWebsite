import SkillsCard from './SkillsCard';

import { FaDatabase, FaLanguage, FaMicrochip } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mb-auto mt-auto">
        <h1 className="mb-5 mt-6 text-center text-4xl font-medium text-teal-600">Skills</h1>
        <div className="flex justify-evenly">
          <SkillsCard
            icon={<FaLanguage />}
            title="Languages"
            description="JavaScript, TypeScript, Elixir, Ruby, Go"
          />
          <SkillsCard
            icon={<FaMicrochip />}
            title="Technologies"
            description="React, Rails, GraphQL, Git, AWS, Tailwind"
          />
          <SkillsCard
            icon={<FaDatabase />}
            title="Databases"
            description="SQL, PostgreSQL, MySQL,"
          />
        </div>
      </div>
    </div>
  );
}
