export interface Usuario{
  nombre:          string;
  apellido:        string;
  fechaNacimiento: Date;
  email:           string;
  telefono:        string;
  contrasena:      string
}

export interface loginData{
  email:      string;
  contrasena: string;
}