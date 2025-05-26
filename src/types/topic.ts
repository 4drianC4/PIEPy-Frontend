export interface Topic {
  id: string;
  title: string;
  level: "Básico" | "Intermedio" | "Avanzado";
  videoUrl: string;
  theory: string;
  activity: string;
  extraText: string;
  fileLink: string;
}
