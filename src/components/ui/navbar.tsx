import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../app/contexts/authContext/AuthProvider.tsx";
import { auth, db } from "../../app/firebase/firebase.ts";

const Navbar = () => {
  const { currentUser, isUserLoggedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const [nameToDisplay, setNameToDisplay] = useState<string>(() => {
    return sessionStorage.getItem("keeper_username") || "User";
  });

  const logOut = async () => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("keeper_username");
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchUsername = async () => {
      if (currentUser) {
        const fallbackName =
          currentUser.displayName || currentUser.email?.split("@")[0] || "User";
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        const finalName =
          docSnap.exists() && docSnap.data().username
            ? docSnap.data().username
            : fallbackName;
        setNameToDisplay(finalName);
        sessionStorage.setItem("keeper_username", finalName);
      } else {
        setNameToDisplay("User");
        sessionStorage.removeItem("keeper_username");
      }
    };
    fetchUsername();
  }, [currentUser]);

  return (
    <nav className="bg-white w-full">
      <div className="max-w-9xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="shrink-0 flex items-center">
            <Link to="/" className="text-3xl font-extrabold font-alegraya">
              Keeper
            </Link>
          </div>

          <div className="hidden font-alegraya-sans lowercase text-xl lg:flex space-x-8">
            <Link
              to="/"
              className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95"
            >
              About Keeper
            </Link>
            <Link
              to="/create"
              className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95"
            >
              Create Character
            </Link>
            <Link
              to="/view"
              className="hover:text-gray-500 hover:underline-offset-3 hover:underline active:scale-95"
            >
              View Characters
            </Link>
            {!isUserLoggedIn ? (
              <Link
                to="/login"
                className="hover:text-gray-500 hover:underline-offset-3 hover:underline"
              >
                Log In
              </Link>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex bg-black cursor-pointer hover:bg-zinc-800  px-3  items-center gap-3 group"
                >
                  <span className="font-medium text-white lowercase">
                    {nameToDisplay}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-white  duration-200 ${isUserMenuOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isUserMenuOpen && (
                  <>
                    <div className="absolute right-0 mt-2 w-48 z-50 bg-white border shadow-btn overflow-hidden duration-150">
                      <Link
                        to="/change-username"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-1 text-gray-700 hover:bg-gray-100  border-b border-black/10"
                      >
                        <span>edit username</span>
                      </Link>

                      <button
                        onClick={logOut}
                        className="w-full flex items-center gap-3 px-4 py-1 text-red-600 hover:bg-red-50 "
                      >
                        <span>log out</span>
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${isMobileMenuOpen ? "block" : "hidden"} lg:hidden bg-black text-white`}
      >
        <div className="px-4 pt-2 pb-6 mb-10 space-y-2 font-alegraya-sans lowercase text-xl">
          {isUserLoggedIn && (
            <div className="py-4 border-b border-white/10 mb-2">
              <p className="text-gray-400 text-sm">welcome back,</p>
              <p className="text-2xl lowercase font-bold">{nameToDisplay}</p>
            </div>
          )}
          <Link to="/" className="block py-1 hover:text-white/70">
            Home
          </Link>
          <Link to="/about" className="block py-1 hover:text-white/70">
            About Keeper
          </Link>
          <Link to="/create" className="block py-1 hover:text-white/70">
            Create Character
          </Link>
          <Link to="/view" className="block py-1 hover:text-white/70">
            View Characters
          </Link>
          {isUserLoggedIn ? (
            <>
              <Link
                to="/change-username"
                className="block py-1 hover:text-white/70"
              >
                Edit Nickname
              </Link>
              <button
                onClick={logOut}
                className="block py-1 lowercase hover:text-white/70"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="block py-1 hover:text-white/70">
              Log In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
