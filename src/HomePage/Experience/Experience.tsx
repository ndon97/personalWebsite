import ExperienceTab from './ExperienceTab';

export default function Experience() {
  return (
    <div className="flex h-screen w-full flex-col p-10 pb-2">
      <h1 className="mb-2 text-center text-4xl font-medium text-gray-700">Expereince</h1>
      <ExperienceTab
        title="Xplor Technologies"
        description={[
          'Led the frontend development of a comprehensive website redesign project.',
          'Worked on major Typescript/React features that significantly enhanced UI/UX, increasing customer satisfaction scores by over 15%',
          'Enhanced the Elixir backend API by adding new endpoints.',
          'Optimised existing graphQL queries for better performance, eliminating large amount of customer complaints.',
          'Collaborated closely with product and design teams to develop an innovative, user-friendly product that meets customer needs.',
          'Identified, addressed, and resolved a range of bugs to improve overall website performance and stability.',
          ' Initiated and implemented learning opportunities for junior team members, including lunch and learn sessions and team-based PR reviews.',
          'Advocated for and implemented changes that improved developer workflows and team collaboration.',
          'Assisted new employees with onboarding, ensuring a smooth transition and integration into the team.',
        ]}
      />
      <ExperienceTab
        title="Commonwealth Bank"
        description={[
          'Engaged with a diverse range of customers to understand their needs, delivering innovative solutions to address various issues.',
          'Consistently surpassed KPI targets for customer satisfaction and problem resolution, enhancing overall client experience.',
          'Assumed leadership roles in training new agents, ensuring a comprehensive and successful onboarding process.',
        ]}
      />
    </div>
  );
}
