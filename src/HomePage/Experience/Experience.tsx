import ExperienceTab from './ExperienceTab';

export default function Experience() {
  return (
    <div className="flex h-screen w-full flex-col pl-10 pr-10">
      <div className="m-auto">
        <h1 className="mb-8 text-center text-4xl font-medium text-teal-600">Experience</h1>
        <ExperienceTab
          title="Xplor Technologies"
          role="Software Engineer"
          description="Xplor Technologies is the first global platform integrating Saas, Payments and Growth Technologies. They offer software solutions in fast-growing “everyday life” verticals: Childcare & Education, Fitness & Wellbeing, Field Services and Personal Services - and a global, cloud-based payment processing platform."
          points={[
            'Led the frontend development of a comprehensive website redesign project.',
            'Worked on major Typescript/React features that significantly enhanced UI/UX, increasing customer satisfaction scores by over 15%',
            'Enhanced the Elixir backend API by adding new endpoints.',
            'Optimized existing GraphQL queries for better performance, eliminating a large number of customer complaints.',
            'Collaborated closely with product and design teams to develop an innovative, user-friendly product that meets customer needs.',
            'Identified, addressed, and resolved a range of bugs to improve overall website performance and stability.',
            ' Initiated and implemented learning opportunities for junior team members, including lunch and learn sessions and team-based PR reviews.',
            'Advocated for and implemented changes that improved developer workflows and team collaboration.',
            'Assisted new employees with onboarding, ensuring a smooth transition and integration into the team.',
          ]}
        />
        <ExperienceTab
          title="Commonwealth Bank"
          role="Customer Service Representative"
          description="Commonwealth Bank is Australia's leading provider of integrated financial services including retail banking, premium banking, business banking, institutional banking, funds management, superannuation, insurance, investment and sharebroking products and services."
          points={[
            'Engaged with a diverse range of customers to understand their needs, delivering innovative solutions to address various issues.',
            'Consistently surpassed KPI targets for customer satisfaction and problem resolution, enhancing overall client experience.',
            'Assumed leadership roles in training new agents, ensuring a comprehensive and successful onboarding process.',
          ]}
        />
      </div>
    </div>
  );
}
