import SkillsCard from './SkillsCard';

import { FaDatabase, FaLanguage, FaMicrochip } from 'react-icons/fa';

export default function Skills() {
  return (
    <div className="flex h-screen w-full flex-col">
      <div className="mb-auto mt-auto">
        <h1 className="mb-5 mt-6 text-center text-4xl font-medium text-teal-600">Skills</h1>
        <div className="flex justify-evenly">
          <SkillsCard
            icon={<FaLanguage size={30} className="text-rose-700" />}
            title="Languages"
            description="JavaScript, TypeScript, Elixir, Ruby, Go"
            borderColor="border-cyan-700"
            backgroundColor="bg-cyan-200"
          />
          <SkillsCard
            icon={<FaMicrochip size={30} className="text-rose-700" />}
            title="Technologies"
            description="React, Rails, GraphQL, Git, AWS, Tailwind"
            borderColor="border-red-800"
            backgroundColor="bg-red-200"
          />
          <SkillsCard
            icon={<FaDatabase size={30} className="text-rose-700" />}
            title="Databases"
            description="SQL, PostgreSQL, MySQL"
            borderColor="border-orange-700"
            backgroundColor="bg-orange-200"
          />
        </div>
      </div>
    </div>
  );
}
