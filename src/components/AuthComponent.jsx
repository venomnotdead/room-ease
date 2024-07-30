// components/AuthComponent.js

import React, { useState } from 'react';
import { signUpWithEmail, signInWithEmail, signInWithGoogle, signOutUser } from '@/utils/assets/firebase';

const AuthComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold text-primary-darker mb-6">Authentication</h1>
      <div className="w-full max-w-md bg-primary-darker rounded-lg shadow-md p-8">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded bg-primary-default focus:outline-none focus:ring-2 focus:ring-primary-default"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded bg-primary-default focus:outline-none focus:ring-2 focus:ring-primary-default"
        />
        <button
          onClick={() => signUpWithEmail(email, password)}
          className="w-full py-2 mb-2 text-white bg-primary-default rounded hover:bg-primary-darker"
        >
          Sign Up
        </button>
        <button
          onClick={() => signInWithEmail(email, password)}
          className="w-full py-2 mb-2 text-white bg-primary-default rounded hover:bg-primary-darker"
        >
          Sign In
        </button>
        <button
          onClick={signInWithGoogle}
          className="w-full py-2 mb-2 text-white bg-primary-default rounded hover:bg-primary-darker"
        >
          Sign In with Google
        </button>
        <button
          onClick={signOutUser}
          className="w-full py-2 text-white bg-primary-default rounded hover:bg-primary-darker"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;
