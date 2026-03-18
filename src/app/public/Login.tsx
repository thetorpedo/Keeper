import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/questbutton.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.ts';


const Login = () => {
  const { userLoggedIn } = useAuth()
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(!isSigningIn) {
      setIsSigningIn(true);
      try {
            await doSignInWithEmailAndPassword(email, password);
            navigate("/");
        } catch (error) {
          if (error instanceof Error) {
              setErrorMessage(error.message);
          } else {
              setErrorMessage("Ocorreu um erro inesperado.");
          }
          setIsSigningIn(false); 
      }
    }
  }

  const onGoogleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
        navigate("/");
      } catch (error) {
        setIsSigningIn(false);
      }
    }
}

  return (
    <main className="flex items-center justify-center bg-purple/30 h-screen">
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <section className="w-full max-w-md p-8 mx-5 space-y-8 border bg-white shadow-btn2">
        <div className='absolute'>
          <Link to='/' className="text-5xl hover:opacity-70">
            <ArrowLeft className='hover:scale-110' />
          </Link>
        </div>
        <div className="text-center">
          <Link to='/' className="text-5xl font-extrabold tracking-tight hover:opacity-70 font-alegraya ">
            Keeper
          </Link>
          <p className="mt-2 text-lg">
            Please sign in to continue
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onLogin}>
          <div className="space-y-3">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2  placeholder-gray-500 border appearance-none focus:outline-none focus:ring-indigo-500 focus:border-purple-400 focus:z-10 sm:text-sm"
                placeholder="E-mail"
                value={email} onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2  placeholder-gray-500 border appearance-none focus:outline-none focus:ring-indigo-500 focus:border-purple-400 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password} onChange={(e) => { setPassword(e.target.value) }}
              />
              <NavLink to="/reset" className="font-medium text-sm font-alegraya-sans text-purple-900 hover:text-purple-900/40">
              forgot your password?
              </NavLink>
            </div>
            {errorMessage && (
                            <span className='text-red-600 my-2 font-bold'>{errorMessage}</span>
                        )}
          </div>

          <div className='flex justify-center gap-5'>
            <Button
              disabled={isSigningIn}
              className=""
              text={isSigningIn ? 'Signing In...' : 'Sign In'}
              isImportant
              onClick={onLogin}
            >
            </Button>
            <Button
              disabled={isSigningIn}
              onClick={(e) => { onGoogleLogin(e) }}
              className={`flex items-center justify-center py-2.5 border shadow-btn text-sm font-medium  ${isSigningIn ? 'cursor-not-allowed' : 'hover:bg-gray-100 transition duration-300 active:bg-gray-100'}`}>
              <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_17_40)">
                      <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#4285F4" />
                      <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#34A853" />
                      <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#FBBC04" />
                      <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#EA4335" />
                  </g>
                  <defs>
                      <clipPath id="clip0_17_40">
                          <rect width="48" height="48" fill="white" />
                      </clipPath>
                  </defs>
              </svg>
              </Button>
          </div>
        </form>
        <p className="mt-2 text-center ">
          No account yet?{' '}
          <NavLink to="/signup" className="font-medium text-xl font-alegraya-sans text-purple-900 hover:text-purple-900/40">
            sign up
          </NavLink>
        </p>
      </section>
    </main>
  )
}

export default Login