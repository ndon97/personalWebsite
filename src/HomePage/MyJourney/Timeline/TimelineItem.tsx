type TimelineItemProps = {
  date: string;
  title: string;
  description: string;
};

export default function TimelineItem({ date, title, description }: TimelineItemProps) {
  return (
    <li>
      <div className="flex-start flex items-center pt-3">
        <div className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="mb-6 ms-4 mt-2">
        <h4 className="mb-1.5 text-xl font-semibold text-indigo-500">{title}</h4>
        <p className="mb-3">{description}</p>
      </div>
    </li>
  );
}
