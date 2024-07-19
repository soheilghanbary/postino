import { OAuth } from '@/components/oauth';
import { TextLine } from '@/components/text-line';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getUserSession } from '@/lib/auth';
import { CommandIcon } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const user = await getUserSession();
  if (user) return redirect('/home');
  return (
    <section className="flex h-dvh w-dvw flex-col items-center justify-center">
      <div className="mx-auto w-full max-w-xs">
        <CommandIcon className="mx-auto size-6" />
        <h1 className="text-center font-extrabold text-lg">Welcome Back</h1>
        <p className="text-center text-muted-foreground text-sm">
          Sign In your Account to use App
        </p>
        <div className="my-4 grid gap-3">
          <Input type="text" placeholder="Email Address" />
          <Button>Sign In with Email</Button>
        </div>
        <TextLine text="Sign In with" />
        <OAuth />
      </div>
    </section>
  );
}
