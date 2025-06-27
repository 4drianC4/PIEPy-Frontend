import api from './index';
import { getCurso, Curso } from '../types/curso';

export const postCurso = async (data: Curso): Promise<Curso> => {
  const response = await api.post('/login', data);
  return response.data; 
};
