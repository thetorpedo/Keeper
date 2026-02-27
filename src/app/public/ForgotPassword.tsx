import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from '../../components/ui/button.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { doPasswordReset } from '../firebase/auth.ts';


const ForgotPassword = () => {
    const { userLoggedIn } = useAuth();

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const onPasswordReset = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!email) {
        setErrorMessage("Please enter your email address first.");
        return;
    }

    try {
        await doPasswordReset(email);
        alert("Password reset email sent! Check your inbox.\nBe sure to check your SPAM folder!");
    } catch (error) {
        if (error instanceof Error) {
            setErrorMessage("Error: " + error.message);
        }
    }
};

  return (
    <main className="flex items-center justify-center bg-purple/30 h-screen">
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <section className="w-full max-w-md p-8 mx-5 space-y-8 border bg-white shadow-btn2">
        <div className='absolute'>
          <a href='/#' className="text-5xl hover:opacity-70">
            <ArrowLeft className='hover:scale-110' />
          </a>
        </div>
        <div className="text-center">
          <a href='/#' className="text-5xl font-extrabold tracking-tight hover:opacity-70 font-alegraya ">
            Keeper
          </a>
          <p className="mt-2 text-lg">
            You will receive instructions on your e-mail for resetting your password.
          </p>
        </div>
        <form className="mt-8 space-y-6">
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
            {errorMessage && (
                            <span className='text-red-600 my-2 font-bold'>{errorMessage}</span>
                        )}
          </div>

          <div className='flex justify-center gap-5'>
            <Button
              isImportant
              onClick={onPasswordReset}
            >Send 
            </Button>
          </div>
        </form>
        <p className="mt-2 text-center text-lg font-alegraya-sans lowercase font-semibold">
            Be sure to check your spam folder!
          </p>
      </section>
    </main>
  )
}

export default ForgotPassword