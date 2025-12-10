import { Outlet, Link, useLocation } from 'react-router-dom';
import { AppShell, Burger, Stack, NavLink, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHome, IconSettings } from '@tabler/icons-react';
import { Header } from './Header';

export default function Layout() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();

  const navItems = [
    { label: 'Quizzes', icon: IconHome, href: '/' },
    { label: 'Settings', icon: IconSettings, href: '/settings' },
  ];

  return (
    <AppShell
      header={{ height: 70 }}
      padding="md"
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" gap="md" justify="space-between" style={{ position: 'relative' }}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Header />
          </div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <Stack gap="0">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              component={Link}
              to={item.href}
              label={item.label}
              leftSection={<item.icon size={16} />}
              active={location.pathname === item.href}
              onClick={() => {
                if (window.innerWidth < 576) {
                  toggle();
                }
              }}
            />
          ))}
        </Stack>
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
