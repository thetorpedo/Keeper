import { onAuthStateChanged, signOut } from "firebase/auth";
import { Menu, X } from 'lucide-react'; // Biblioteca de ícones (opcional)
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';


const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [])

  const logOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch(() => {
      // An error happened.
    });
  }
 

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white w-full">
      <div className="max-w-9xl mx-auto px-8">
        <div className="flex justify-between h-20 items-center">

          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-extrabold font-alegraya">Keeper</Link>
          </div>

          {/* Desktop Menu (Escondido no mobile) */}
          <div className="hidden font-alegraya-sans lowercase text-xl md:flex space-x-8">
            <Link to="/" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Home</Link>
            <Link to="/about" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">About Keeper</Link>
            <a href="#" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Create Character</a>
            <a href="#" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">View Characters</a>
            {loggedIn ? (
              <a href="#" onClick={logOut} className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Log Out</a>
            ) : (
              <a href="/login" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Log In</a>
            )}
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
          <Link to="/" className="block px-3 py-2 text-white active:bg-white/50">Home</Link>
          <Link to="/about" className="block px-3 py-2 text-white active:bg-white/50">About Keeper</Link>
          <a href="#" className="block px-3 py-2 text-white active:bg-white/50">Create Character</a>
          <a href="#" className="block px-3 py-2 text-white active:bg-white/50">View Characters</a>
          {loggedIn ? (
            <a href="/logout" className="block px-3 py-2 text-white active:bg-white/50">Log Out</a>
          ) : (
            <a href="/login" className="block px-3 py-2 text-white active:bg-white/50">Log In</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
