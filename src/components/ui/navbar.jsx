import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Biblioteca de ícones (opcional)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full">
      <div className="max-w-9xl mx-auto px-8">
        <div className="flex justify-between h-20 items-center">
          
          <div className="shrink-0 flex items-center">
            <a href="#" className="text-3xl font-extrabold font-alegraya">Keeper</a>
          </div>

          {/* Desktop Menu (Escondido no mobile) */}
          <div className="hidden font-alegraya-sans lowercase text-xl md:flex space-x-8">
            <a href="#" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Create Character</a>
            <a href="#" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">View Characters</a>
            <a href="#" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">About Keeper</a>
            <a href="#" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Log In</a>
          </div>

          {/* Botão Hambúrguer (Escondido no desktop) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Renderização condicional ou transição) */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-alegraya-sans lowercase text-xl">
          <a href="#" className="block px-3 py-2 text-white active:bg-white/50">Create Character</a>
          <a href="#" className="block px-3 py-2 text-white active:bg-white/50">View Characters</a>
          <a href="#" className="block px-3 py-2 text-white active:bg-white/50">About Keeper</a>
          <a href="#" className="block px-3 py-2 text-white active:bg-white/50">Log In</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;