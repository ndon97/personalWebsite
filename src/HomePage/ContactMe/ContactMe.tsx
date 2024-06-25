import ContactMeCard from './ContactMeCard';
import { FaMobileAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <div className="flex flex-col items-center bg-white p-10 pt-0">
      <h1 className="pb-6 pt-4 text-center text-2xl font-medium text-teal-600">Contact</h1>
      <footer className="flex w-full justify-around">
        <ContactMeCard
          title="Mobile"
          value="0425273316"
          icon={<FaMobileAlt size={30} className="text-emerald-700" />}
        />
        <ContactMeCard
          title="Email"
          link="nick.don.1102@gmail.com"
          email={true}
          icon={<FaEnvelope size={30} className="text-red-900" />}
        />
        <ContactMeCard
          title="Github"
          link="https://github.com/ndon97"
          icon={<FaGithub size={30} />}
        />
        <ContactMeCard
          title="LinkedIn"
          link="https://www.linkedin.com/in/nick-don/"
          icon={<FaLinkedin size={30} className="text-blue-800" />}
        />
      </footer>
    </div>
  );
}
