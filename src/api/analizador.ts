import api from './index';
import { Analizador, AnalizadorRespuesta } from '../types/analizador';

export const postCurso = async (data: Analizador): Promise<AnalizadorRespuesta> => {
  const response = await api.post('/analizador', data);
  return response.data; 
};
