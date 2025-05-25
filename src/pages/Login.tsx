import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Logo from '@/assets/images/Logo.png';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    //agregar logica para conectarse al backend
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md p-6 sm:p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-center">
          <img 
            src={Logo} 
            alt="Logo de la aplicación" 
            className="h-16 sm:h-20 w-auto"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Log In</h2>
        </div>
        
        <form className="mt-4 sm:mt-6 space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Ingresa tu email"
                className="mt-1 text-sm sm:text-base"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-700">
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                className="mt-1 text-sm sm:text-base"
                required
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-gray-900">
                Recordarme
              </label>
            </div>

            <div className="text-xs sm:text-sm">
              <a href="#" className="font-medium text-python-lightblue hover:text-python-blue">
                ¿Olvidaste tu contraseña?
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-python-lightblue text-white hover:bg-python-blue py-2 sm:py-3"
            >
              Ingresar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;