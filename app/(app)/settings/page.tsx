import { ModeToggle } from '@/components/mode-toggle';
import { ArrowRight, SparklesIcon, UserCog } from 'lucide-react';
import Link from 'next/link';

export default () => {
  return (
    <div>
      <header className="border-b p-4">
        <h1 className="font-bold">Settings</h1>
      </header>
      <section className="p-4">
        <Link
          href={'/settings/account'}
          className="flex cursor-pointer items-center justify-between gap-4 rounded-lg p-4 text-muted-foreground duration-150 hover:bg-muted hover:text-foreground"
        >
          <UserCog className="size-6" />
          <span className="flex-1 font-medium">Account Settings</span>
          <ArrowRight className="size-6" />
        </Link>
        <div className="flex cursor-pointer items-center justify-between gap-4 rounded-lg p-4 text-muted-foreground duration-150 hover:bg-muted hover:text-foreground">
          <UserCog className="size-6" />
          <span className="flex-1">Account Settings</span>
          <ArrowRight className="size-6" />
        </div>
        <div className="flex cursor-pointer items-center justify-between gap-4 rounded-lg p-4 text-muted-foreground duration-150 hover:bg-muted hover:text-foreground">
          <SparklesIcon className="size-6" />
          <span className="flex-1 font-medium">Change Theme</span>
          <ModeToggle />
        </div>
      </section>
    </div>
  );
};
