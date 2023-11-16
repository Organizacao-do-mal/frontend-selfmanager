'use client'

import { Navbar } from '@/components/Navbar/Navbar';
import { Header } from '@/components/Header/Header'
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export default function HomePage() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <>

      <AppShell
        header={{ height: 60 }}
        navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
      >
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Navbar>
          <Navbar />
        </AppShell.Navbar>

      </AppShell>
    </>
  );
}
