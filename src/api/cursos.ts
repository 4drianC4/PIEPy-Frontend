// src/api/cursos.ts
import api from './index';
import { getCurso, Curso } from '../types/curso';

// Obtener todos los cursos
export const getCursos = async (): Promise<getCurso[]> => {
  const response = await api.get('/cursos');
  return response.data; // Devuelvo un array de Cursos
};

// Obtener un curso por ID
export const getCursoById = async (id: number): Promise<getCurso> => {
  const response = await api.get(`/cursos/${id}`);
  return response.data; // Devuelvo un solo Curso
};

// Actualizar un curso
export const updateCurso = async (
  id: number,
  data: Partial<Curso> // Usamos Partial para indicar que no todos los campos son obligatorios
): Promise<getCurso> => {
  const response = await api.put(`/cursos/${id}`, data);
  return response.data; // Devuelvo el curso actualizado
};

// Crear un nuevo curso
export const postCurso = async (data: Curso): Promise<Curso> => {
  const response = await api.post('/cursos', data);
  return response.data; // Devuelvo el curso creado
};
