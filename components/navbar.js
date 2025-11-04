// components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // 1. Estado para controlar si el menú móvil está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);

  // 2. Función para alternar el estado del menú
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Inicio (La Crisis)" },
    { href: "/etica-trabajo", label: "Ética de Trabajo" },
    { href: "/estetica-consumo", label: "Estética de Consumo" },
  ];

  return (
    <nav className="bg- text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Título Principal / Logo */}
        <Link href="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition duration-300">
          Crisis 2001: Perspectivas
        </Link>
        
        {/* Enlaces de Navegación para ESCRITORIO (Visibles a partir de 'md') */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-300 hover:text-white transition duration-300">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Botón HAMBURGUESA para MÓVIL (Visible solo en pantallas pequeñas) */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {/* Icono de hamburguesa (si está cerrado) o X (si está abierto) */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Menú Desplegable para MÓVIL (Aparece al hacer clic) */}
      <div 
        id="mobile-menu" 
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-800 transition-all duration-300`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu} // Cierra el menú al seleccionar un enlace
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;