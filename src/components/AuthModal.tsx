import React from 'react';
import { X, LogIn, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../lib/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { loginWithGoogle, loading } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      onClose();
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden p-8 text-center"
          >
            <button onClick={onClose} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600">
              <X size={20} />
            </button>

            <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg shadow-blue-500/20">
              <LogIn size={32} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Join the Fleet</h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">Sign in to contribute terms, propose edits, and bookmark your favorite concepts.</p>

            <button
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full py-3 px-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl font-bold text-slate-700 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-3 shadow-sm"
            >
              <Globe size={20} className="text-blue-500" />
              Continue with Google
            </button>

            <p className="mt-6 text-[10px] text-slate-400 uppercase tracking-widest">
              By continuing, you agree to our Terms of Service.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
