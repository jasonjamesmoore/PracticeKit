import { Group, Title, ActionIcon, Container } from '@mantine/core';
import { IconHelp } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={classes.header}>
      <Container size="lg" h="100%">
        <Group h="100%" justify="space-between" align="center">
          {/* Logo/Title */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Title order={1} size="h3">
              🎼 Theory Flashcards
            </Title>
          </Link>

          {/* Desktop Navigation + Help */}
          <Group gap="lg" hiddenFrom="sm" ml="auto">
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                color: isActive('/') ? 'var(--mantine-color-blue-6)' : 'inherit',
                fontWeight: isActive('/') ? 600 : 400,
              }}
            >
              Quizzes
            </Link>
            <Link
              to="/settings"
              style={{
                textDecoration: 'none',
                color: isActive('/settings') ? 'var(--mantine-color-blue-6)' : 'inherit',
                fontWeight: isActive('/settings') ? 600 : 400,
              }}
            >
              Settings
            </Link>
            <ActionIcon variant="subtle" size="lg" title="Help">
              <IconHelp size={20} />
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </header>
  );
}
