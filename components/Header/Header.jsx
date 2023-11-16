'use client'
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <header className={classes.header} >
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}