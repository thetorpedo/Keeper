import { doc, updateDoc } from "firebase/firestore";
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/ui/questbutton.tsx';
import { useAuth } from '../contexts/authContext/authProvider.tsx';
import { doUpdateDisplayName } from '../firebase/auth.ts';
import { db } from '../firebase/firebase.ts';

const ChangeUsername = () => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    
    const [newNick, setNewNick] = useState(currentUser?.displayName || '');
    const [isUpdating, setIsUpdating] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isUpdating) return;

        if (newNick.trim().length < 3) {
            setMessage({ type: 'error', text: 'Nickname must be at least 3 characters.' });
            return;
        }

        setIsUpdating(true);
        setMessage({ type: '', text: '' });

        try {
            if (!currentUser?.uid) {
                throw new Error("User not authenticated");
            }
            await doUpdateDisplayName(newNick);
            const docRef = doc(db, "users", currentUser.uid);
            await updateDoc(docRef, {
                username: newNick
            });
            
            if (currentUser) {
                await currentUser.reload();
            }

            setMessage({ type: 'success', text: 'Username updated successfully!' });
            setTimeout(() => navigate(-1), 500);
            
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to update nickname. Try again.' });
            setIsUpdating(false);
        }
    };

    return (
        <main className="flex items-center justify-center bg-purple/30 h-screen">
            <section className="w-full max-w-md p-8 mx-5 space-y-8 border bg-white shadow-btn2 relative">
                <div className='absolute top-8 left-8'>
                    <button onClick={() => navigate(-1)} className="hover:opacity-70">
                        <ArrowLeft className='hover:scale-110' />
                    </button>
                </div>

                <div className="text-center pt-4">
                    <h2 className="text-3xl font-extrabold font-alegraya">Change Username</h2>
                    <p className="mt-2 text-gray-600">How should Keeper call you?</p>
                </div>

                <form onSubmit={handleUpdate} className="mt-8 space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bol">New Username</label>
                        <input
                            type="text"
                            required
                            className="relative block w-full px-3 py-2 border placeholder-gray-500 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm"
                            placeholder="Enter your new nick"
                            value={newNick}
                            onChange={(e) => setNewNick(e.target.value)}
                        />
                        
                        {message.text && (
                            <p className={`text-sm font-bold mt-2 ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                {message.text}
                            </p>
                        )}
                    </div>

                    <div className='flex justify-center'>
                        <Button
                            disabled={isUpdating}
                            text={isUpdating ? 'Updating...' : 'Save Changes'}
                            isImportant
                            type="submit"
                        />
                    </div>
                </form>
            </section>
        </main>
    );
};

export default ChangeUsername;