'use client';
import { cn } from '@/lib/utils';
import {
  HomeIcon,
  type LucideIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon } from './icons';
import { Button } from './ui/button';

export function PrimarySidebar() {
  return (
    <aside className="sticky top-0 flex h-dvh w-60 flex-col gap-4 border-r p-4">
      <LogoIcon className="ml-2 size-10" />
      <div className="space-y-1">
        <SidebarLink label="Home" href="/home" icon={HomeIcon} />
        <SidebarLink label="Search" href="/search" icon={SearchIcon} />
        <SidebarLink label="Profile" href="/profile" icon={UserIcon} />
        <SidebarLink label="Settigns" href="/settings" icon={SettingsIcon} />
      </div>
      <Button variant={'default'} className="mt-2 w-full font-semibold">
        <RocketIcon className="mr-2.5 size-4" />
        New Post
      </Button>
    </aside>
  );
}

type SidebarLinkProps = {
  label: string;
  href: string;
  icon: LucideIcon;
};

const SidebarLink = ({ label, href, icon: Icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center rounded-lg px-3 py-1.5 font-medium text-lg text-muted-foreground duration-150 hover:text-foreground',
        { 'bg-muted text-foreground': isActive },
      )}
    >
      <Icon className="mr-3 size-5" />
      {label}
    </Link>
  );
};
