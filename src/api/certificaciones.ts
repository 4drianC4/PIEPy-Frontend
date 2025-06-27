import api from './index';
import { Certificacion } from '../types/certificaciones';

// Obtener todas las certificaciones
export const getCertificaciones = async (): Promise<Certificacion[]> => {
  const response = await api.get('/certificaciones');
  return response.data;
};

// Obtener certificación por ID
export const getCertificacionById = async (id: number): Promise<Certificacion> => {
  const response = await api.get(`/certificaciones/${id}`);
  return response.data;
};

// Crear nueva certificación
export const createCertificacion = async (
  data: Omit<Certificacion, 'id'>
): Promise<Certificacion> => {
  const response = await api.post('/certificaciones', data);
  return response.data;
};

// Actualizar certificación
export const updateCertificacion = async (
  id: number,
  data: Partial<Certificacion>
): Promise<Certificacion> => {
  const response = await api.put(`/certificaciones/${id}`, data);
  return response.data;
};

// Eliminar certificación
export const deleteCertificacion = async (id: number): Promise<void> => {
  await api.delete(`/certificaciones/${id}`);
};