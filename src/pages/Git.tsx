export default function Git() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Control de versiones con Git</h1>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">¿Qué es Git?</h2>
        <p className="text-gray-700">
          Git es un sistema de control de versiones distribuido que permite
          gestionar y registrar el historial de cambios en archivos de un
          proyecto. Es esencial para el desarrollo colaborativo de software.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Video explicativo</h2>
        <div className="aspect-video bg-black rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/udNxQj-DQhE"
            title="Introducción a Git"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Comandos básicos</h2>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Configuración inicial:</h3>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono space-y-2">
            <code>git config --global user.name "Tu Nombre"</code>
            <br />
            <code>git config --global user.email "tu@email.com"</code>
          </div>

          <h3 className="font-semibold mt-4 mb-2">Flujo básico:</h3>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg font-mono space-y-2">
            <code>git init</code>
            <br />
            <code>git add .</code>
            <br />
            <code>git commit -m "Mensaje descriptivo"</code>
            <br />
            <code>git push origin main</code>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Buenas prácticas</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Hacer commits pequeños y frecuentes</li>
          <li>Escribir mensajes de commit descriptivos</li>
          <li>Trabajar con ramas (branches)</li>
          <li>Hacer pull antes de push</li>
          <li>Ignorar archivos innecesarios con .gitignore</li>
        </ul>
      </div>
    </div>
  );
}
