import { Group, Title, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ColorSchemeToggle } from './ColorSchemeToggle';
import classes from './Header.module.css';

export function Header() {
  return (
    <header className={classes.header}>
      <Container size="lg" h="100%">
        <Group h="100%" justify="space-between" align="center">
          {/* Logo/Title */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Title order={1} size="h3">
              🎼 PracticeKit
            </Title>
          </Link>

          {/* Color scheme toggle and future user profile/account features */}
          <ColorSchemeToggle />
        </Group>
      </Container>
    </header>
  );
}
