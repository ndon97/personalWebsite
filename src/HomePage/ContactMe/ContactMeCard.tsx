type ContactMeCardProps = {
  icon?: JSX.Element;
  title: string;
  value?: string;
  link?: string;
  email?: boolean;
};

export default function ContactMeCard({ icon, title, value, link, email }: ContactMeCardProps) {
  return (
    <div className="flex items-center">
      <div className="rounded-full border border-sky-500 bg-slate-100 p-3">{icon}</div>
      <div className="ml-4">
        <h1 className="text-center text-2xl">{title}</h1>
        {value && <p>{value}</p>}
        {link && (
          <a
            href={email ? 'mailto:nick.don.1102@gmail.com' : link}
            target="_blank"
            rel="noreferrer"
          >
            {link}
          </a>
        )}
      </div>
    </div>
  );
}
