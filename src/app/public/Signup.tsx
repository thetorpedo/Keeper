import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth.js';

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const { userLoggedIn } = useAuth()
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        navigate('/'); 
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Failed to create account.");
        }
        setIsRegistering(false); 
      }
    }
  };

  return (
    <main className="flex items-center justify-center bg-purple/30 h-screen">
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <section className="relative w-full max-w-md mx-5 p-8 space-y-8 border bg-white shadow-btn2">
        <div className='absolute'>
          <a href='/#' className="text-5xl hover:opacity-70">
            <ArrowLeft className='hover:scale-110' />
          </a>
        </div>
        <div className="text-center">
          <a href='/#' className="text-5xl font-extrabold p-5 bg-white tracking-tight hover:opacity-70 font-alegraya ">
            Keeper
          </a>
          <p className="mt-2 text-lg ">
            Create a new account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
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
                disabled={isRegistering}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2  placeholder-gray-500 border appearance-none focus:outline-none focus:ring-indigo-500 focus:border-purple-400 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password} onChange={(e) => { setPassword(e.target.value) }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>
              <input
                disabled={isRegistering}
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                required
                className="relative block w-full px-3 py-2  placeholder-gray-500 border appearance-none focus:outline-none focus:ring-indigo-500 focus:border-purple-400 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={confirmPassword} onChange={(e) => { setconfirmPassword(e.target.value) }}
              />
            </div>
            {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}
          </div>

          <div className='flex justify-center'>
            <Button
              className=""
              text={isRegistering ? 'Signing Up...' : 'Sign Up'}
              isImportant
              type="submit"
              onClick={onSubmit}
            >
            </Button>
          </div>
        </form>
        <p className="mt-2 text-center ">
          Already have an account?{' '}
          <NavLink to="/login" className="font-medium text-xl font-alegraya-sans text-purple-900 hover:text-purple-900/40">
            sign in
          </NavLink>
        </p>
      </section>
    </main>
  )
}

export default Signup