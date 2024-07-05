import EducationTab from './EducationTab';
export default function Education() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center p-10">
      <div className="m-auto">
        <h1 className="mb-2 text-center text-4xl font-medium text-teal-600">Education</h1>
        <ol>
          <EducationTab
            title="Le Wagon"
            degree="Diploma of Web Development"
            description="During my Web Development Diploma at Le Wagon, I learned the fundamental principles of web development. I gained hands-on experience in building responsive and user-friendly websites, refined my problem-solving skills, and developed best practices for writing clean and efficient code. This education provided me with a strong foundation to tackle real-world web development challenges."
          />
          <EducationTab
            title="Monash University"
            degree="Bachelor Of Commerce -  Major in Economics"
            description="During my Bachelor of Commerce degree with a major in Economics at Monash University, I developed a strong analytical mindset and a deep understanding of market dynamics and financial principles. This background has been invaluable in my web development career, as it enhances my ability to create data-driven applications and understand user needs from a business perspective. The skills I acquired in critical thinking, quantitative analysis, and problem-solving have directly contributed to my ability to develop effective, user-centric web solutions."
          />
          <EducationTab title="Salesian College" degree="VCE" />
        </ol>
      </div>
    </div>
  );
}
