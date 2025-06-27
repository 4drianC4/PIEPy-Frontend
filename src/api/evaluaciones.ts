import api from './index';
import { Evaluacion } from '../types/evaluaciones';

// Obtener todas las evaluaciones
export const getEvaluaciones = async (): Promise<Evaluacion[]> => {
  const response = await api.get('/evaluaciones');
  return response.data;
};

// Obtener evaluación por ID
export const getEvaluacionById = async (id: number): Promise<Evaluacion> => {
  const response = await api.get(`/evaluaciones/${id}`);
  return response.data;
};

// Crear nueva evaluación
export const createEvaluacion = async (
  data: Omit<Evaluacion, 'id'>
): Promise<Evaluacion> => {
  const response = await api.post('/evaluaciones', data);
  return response.data;
};

// Actualizar evaluación
export const updateEvaluacion = async (
  id: number,
  data: Partial<Evaluacion>
): Promise<Evaluacion> => {
  const response = await api.put(`/evaluaciones/${id}`, data);
  return response.data;
};

// Eliminar evaluación
export const deleteEvaluacion = async (id: number): Promise<void> => {
  await api.delete(`/evaluaciones/${id}`);
};