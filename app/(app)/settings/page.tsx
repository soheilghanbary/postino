import { ModeToggle } from '@/components/mode-toggle';
import { TextField } from '@/components/text-field';
import { TextFieldArea } from '@/components/text-field-area';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { UserForm } from '@/components/user-form';
import { UserUpload } from '@/components/user-upload';
import { getUserSession } from '@/lib/auth';

export default async function SettingsPage() {
  const user = await getUserSession();
  return (
    <section className="space-y-4">
      <UserUpload initialPath={user?.image!} />
      <UserForm />
      <Card>
        <CardHeader>
          <CardTitle>Change Theme</CardTitle>
        </CardHeader>
        <CardContent>
          <ModeToggle />
        </CardContent>
      </Card>
    </section>
  );
}
