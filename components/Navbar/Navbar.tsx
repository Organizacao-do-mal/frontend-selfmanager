'use client'
import { Group, Code, ScrollArea, rem } from '@mantine/core';
import {
  IconNotes,
  IconGauge,
  IconHeartbeat,
  IconBrain,
  IconRoad,
} from '@tabler/icons-react';
import { UserButton } from '../UserButton/UserButton';
import classes from './Navbar.module.css';
import { Logo } from '../Logo/Logo';
import { LinksGroup } from './NavbarLinksGroup';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Finanças',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Saúde',
    icon: IconHeartbeat,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Desenvolvimento pessoal', icon: IconBrain },
  {
    label: 'Desenvolvimento profissional',
    icon: IconRoad,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];

export function Navbar() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <div className={classes.header}>
        <Group justify="space-between">
          <Logo style={{ width: rem(120) }} />
          <Code fw={700}>v3.1.2</Code>
        </Group>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}