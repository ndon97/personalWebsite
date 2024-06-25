import EducationTab from './EducationTab';
export default function Education() {
  return (
    <div className="flex h-screen w-full flex-col items-center p-10">
      <div className="m-auto">
        <h1 className="mb-2 text-center text-4xl font-medium text-gray-700">Education</h1>
        <ol>
          <EducationTab title="Le Wagon" description="Diploma of Web Development" />
          <EducationTab
            title="Monash University"
            description="Bachelor Of Commerce -  Major in Economics"
          />
          <EducationTab title="Salesian College" description="VCE" />
        </ol>
      </div>
    </div>
  );
}
