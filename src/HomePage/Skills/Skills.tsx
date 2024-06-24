import SkillsCard from './SkillsCard';
import FrontEnd from './svg/FrontEnd';

export default function Skills() {
  return (
    <div className="mb-10">
      <div className="p-8">
        <h1 className="mt-6 text-center text-4xl font-medium text-gray-700">Skills</h1>
      </div>
      <div className="just flex justify-around pl-4 pr-4">
        <SkillsCard
          svg={FrontEnd()}
          title="Languages"
          description="Javascript, Typescript, Elixir, Ruby, Go"
        />
        <SkillsCard
          svg={FrontEnd()}
          title="Technologies"
          description="React, Rails, GraphQL, Git, AWS"
        />
        <SkillsCard svg={FrontEnd()} title="Databases" description="SQL, PostgreSQL, MySQL," />
      </div>
    </div>
  );
}
