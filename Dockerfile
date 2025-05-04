# Usa una imagen liviana con Node.js LTS
FROM node:lts

# Establece el directorio de trabajo
WORKDIR /usr/src/app

# Copia los archivos de dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
