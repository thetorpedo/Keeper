import { signOut } from "firebase/auth";
import { ChevronDown, Menu, X } from 'lucide-react'; // Biblioteca de ícones (opcional)
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from "../../app/contexts/authContext/authProvider.tsx";
import { auth } from '../../app/firebase/firebase.ts';


const Navbar = () => {
 const { currentUser, userLoggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const logOut = async () => {
    try {
      await signOut(auth);
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const nameToDisplay = currentUser?.displayName || currentUser?.email?.split('@')[0] || 'User';


  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-9xl mx-auto px-8">
        <div className="flex justify-between h-20 items-center">

          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-extrabold font-alegraya">Keeper</Link>
          </div>

          <div className="hidden font-alegraya-sans lowercase text-xl md:flex space-x-8">
            <Link to="/" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Home</Link>
            <Link to="/about" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">About Keeper</Link>
            <a href="/create" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">Create Character</a>
            <a href="/view" className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95">View Characters</a>
            {!userLoggedIn ? (
              <Link to="/login" className="hover:text-gray-500 hover:underline-offset-3 hover:underline">Log In</Link>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex bg-black hover:bg-zinc-800 transition-colors px-3  items-center gap-3 group"
                >
                  <span className="font-medium text-white lowercase">
                    {nameToDisplay}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-white transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`} 
                  />
                </button>

                {isUserMenuOpen && (
                  <>
                    <div className="absolute right-0 mt-2 w-48 bg-white border shadow-btn overflow-hidden animate-in fade-in zoom-in duration-150">
                      <Link 
                        to="/change-username" 
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-1 text-gray-700 hover:bg-gray-100 transition-colors border-b border-black/10"
                      >
                        <span>edit username</span>
                      </Link>
                      
                      <button 
                        onClick={logOut}
                        className="w-full flex items-center gap-3 px-4 py-1 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <span>log out</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-black text-white`}>
        <div className="px-4 pt-2 pb-6 space-y-2 font-alegraya-sans lowercase text-xl">
          {userLoggedIn && (
            <div className="py-4 border-b border-white/10 mb-2">
              <p className="text-gray-400 text-sm">welcome back,</p>
              <p className="text-2xl lowercase font-bold">{nameToDisplay}</p>
            </div>
          )}
          <Link to="/" className="block py-1 hover:text-white/70">Home</Link>
          <Link to="/about" className="block py-1 hover:text-white/70">About Keeper</Link>
          <Link to="/" className="block py-1 hover:text-white/70">Create Character</Link>
          <Link to="/" className="block py-1 hover:text-white/70">View Characters</Link>
          {userLoggedIn ? (
            <>
              <Link to="/change-username" className="block py-1 hover:text-white/70">Edit Nickname</Link>
              <button onClick={logOut} className="block py-1 lowercase hover:text-white/70">Log Out</button>
            </>
          ) : (
            <Link to="/login" className="block py-1 hover:text-white/70">Log In</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
