import { auth, googleProvider } from '@/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

// Sign up with email and password
export const signUpWithEmail = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User signed up successfully!');
    } catch (error) {
        console.error('Error signing up:', error.message);
        alert(error.message);
    }
};

// Sign in with email and password
export const signInWithEmail = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User signed in successfully!');
    } catch (error) {
        console.error('Error signing in:', error.message);
        alert(error.message);
    }
};

// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
        alert('User signed in with Google successfully!');
    } catch (error) {
        console.error('Error signing in with Google:', error.message);
        alert(error.message);
    }
};

// Sign out
export const signOutUser = async () => {
    try {
        await signOut(auth);
        alert('User signed out successfully!');
    } catch (error) {
        console.error('Error signing out:', error.message);
        alert(error.message);
    }
};
