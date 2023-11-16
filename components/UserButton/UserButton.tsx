import { UnstyledButton, Group, Avatar, Text, rem, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconLogout, IconMoon, IconSun } from '@tabler/icons-react';
import classes from './UserButton.module.css';

const userInfo = {
  name: "Elias Oliveira",
  email: "elias@email.com",
};

export function UserButton() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const handleToggleMode = () => {
    toggleColorScheme(); // Alternar entre os modos de cor (claro e escuro)
  };
  return (
    <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {userInfo.name}
          </Text>

          <Text c="dimmed" size="xs">
            {userInfo.email}
          </Text>
        </div>

        <ActionIcon>
          {colorScheme === 'dark' ? (
            <IconMoon style={{ width: '24px', height: '24px' }} onClick={handleToggleMode}/>
          ) : (
            <IconSun style={{ width: '24px', height: '24px' }} onClick={handleToggleMode}/>
          )}
        </ActionIcon>


      </Group>
    </UnstyledButton>
  );
}