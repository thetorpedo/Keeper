import { createUserWithEmailAndPassword } from 'firebase/auth';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/button.tsx';
import { auth } from '../../firebase.js';

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const onSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  }

  return (
    <main className="flex items-center justify-center bg-purple/30 h-screen">
      <section className="relative w-full max-w-md p-8 space-y-8 border bg-white shadow-btn2">
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
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-center'>
            <Button
              className=""
              text='sign up'
              isImportant
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