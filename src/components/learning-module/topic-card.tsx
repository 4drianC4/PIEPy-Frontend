// src/components/TopicCard.tsx
interface Props {
  title: string;
  description: string;
  onClick: () => void;
}

export function TopicCard({ title, description, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-darkCard shadow-soft p-4 rounded-2xl transition hover:scale-[1.02] hover:shadow-md"
    >
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{description}</p>
    </div>
  );
}
