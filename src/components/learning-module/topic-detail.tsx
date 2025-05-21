import VideoPlayer from "../video-player";

interface Props {
  topic: string;
}

export function TopicDetail({ topic }: Props) {
  return (
    <div className="bg-blue-200 dark:bg-darkCard p-6 rounded-2xl shadow-soft">
      <h2 className="text-2xl font-heading text-secondary mb-2">{topic}</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Aquí irá el contenido detallado sobre <strong>{topic}</strong>.
        Más adelante puedes insertar videos, ejemplos, ejercicios interactivos, etc.
      </p>
      <VideoPlayer/>
    </div>
  );
}
