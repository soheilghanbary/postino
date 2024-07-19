'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { GithubIcon, GoogleIcon, LoadingIcon } from './icons';
import { Button } from './ui/button';

export const OAuth = () => {
  const [loading, setLoading] = useState({ google: false, github: false });
  return (
    <div className="mt-4 grid grid-cols-2 gap-4">
      <Button
        disabled={loading.google || loading.github}
        variant={'outline'}
        onClick={() => {
          setLoading({ ...loading, google: true });
          signIn('google');
        }}
      >
        {loading.google ? (
          <LoadingIcon className="mr-2 scale-75" />
        ) : (
          <GoogleIcon className="mr-2 size-4" />
        )}
        Google
      </Button>
      <Button
        disabled={loading.google || loading.github}
        variant={'outline'}
        onClick={() => {
          setLoading({ ...loading, github: true });
          signIn('github');
        }}
      >
        {loading.github ? (
          <LoadingIcon className="mr-2 scale-75" />
        ) : (
          <GithubIcon className="mr-2 size-4" />
        )}
        GitHub
      </Button>
    </div>
  );
};
