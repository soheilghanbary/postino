import { getUser } from '@/actions/user';
import { ModeToggle } from '@/components/mode-toggle';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UserForm } from '@/components/user-form';
import { UserUpload } from '@/components/user-upload';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function SettingsPage() {
  const user = await getUser();
  if (!user) return redirect('/login');
  return (
    <section>
      <header className="flex items-center gap-2 border-b p-2">
        <Link
          href={'/settings'}
          className={buttonVariants({ variant: 'link', size: 'icon' })}
        >
          <ArrowLeft className="size-5" />
        </Link>
        <h1 className="font-bold">Account Settings</h1>
      </header>
      <section className="space-y-4 p-4">
        <UserUpload initialPath={user?.image!} />
        <UserForm name={user.name} bio={user.bio} website={user.website} />
        <Card>
          <CardHeader>
            <CardTitle>Change Theme</CardTitle>
          </CardHeader>
          <CardContent>
            <ModeToggle />
          </CardContent>
        </Card>
      </section>
    </section>
  );
}
