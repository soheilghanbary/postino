import { PrimarySidebar } from '@/components/primary-sidebar';
import type { PropsWithChildren } from 'react';

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <section className="container mx-auto flex">
      <PrimarySidebar />
      <main className="flex-1 p-4">{children}</main>
      <aside className="sticky top-0 flex h-dvh w-60 flex-col gap-4 border-l p-4">
        <h2>Secondary Sidebar</h2>
      </aside>
    </section>
  );
}
