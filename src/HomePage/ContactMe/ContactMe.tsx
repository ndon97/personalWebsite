import ContactMeCard from './ContactMeCard';
import { FaMobileAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactMe() {
  return (
    <footer className="flex justify-around bg-white p-10">
      <ContactMeCard title="Mobile" value="0425273316" icon={<FaMobileAlt size={30} color="" />} />
      <ContactMeCard
        title="Email"
        link="nick.don.1102@gmail.com"
        email={true}
        icon={<FaEnvelope size={30} color="" />}
      />
      <ContactMeCard
        title="Github"
        link="https://github.com/ndon97"
        icon={<FaGithub size={30} color="" />}
      />
      <ContactMeCard
        title="Linkedln"
        link="https://www.linkedin.com/in/nick-don/"
        icon={<FaLinkedin size={30} color="#0077B5" />}
      />
    </footer>
  );
}
