import { getCertificacion } from "./certificaciones"
import { getEvaluacion } from "./evaluaciones"

export interface Curso {
  nombre: string;
  descripcion: string;
  idCertificacion: number;
  idEvaluacion: number
}

export interface getCurso {
    id: number;
    nombre: string;
    descripcion: string;
    idCertificacion: number;
    idEvaluacion: number;
    certificaciones: getCertificacion;
    evaluaciones: getEvaluacion
}