import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  onAuthStateChanged, 
  User, 
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);
        if (currentUser) {
          try {
            // Check if user is admin
            const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
            if (userDoc.exists()) {
              setIsAdmin(userDoc.data().role === 'admin');
            } else {
              // Create user doc if it doesn't exist
              const isFirstAdmin = currentUser.email === import.meta.env.VITE_ADMIN_EMAIL;
              await setDoc(doc(db, 'users', currentUser.uid), {
                email: currentUser.email,
                role: isFirstAdmin ? 'admin' : 'user',
                createdAt: new Date().toISOString()
              });
              setIsAdmin(isFirstAdmin);
            }
          } catch (err) {
            console.error('Error fetching user doc:', err);
          }
        } else {
          setIsAdmin(false);
        }
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err) {
      console.error('Firebase Auth error:', err);
      setLoading(false);
    }
  }, []);

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
