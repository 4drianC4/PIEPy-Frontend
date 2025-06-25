import api from './index';
import { Practica } from '../types/practica';

// Crear una nueva práctica
export const postPractica = async (data: Practica): Promise<Practica> => {
  const response = await api.post('/practicas', data);
  return response.data;
};