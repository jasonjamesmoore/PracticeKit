import { Container, Title, Paper, Stack, Button, Text, Group } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import { useOnboarding } from '@/platform/hooks/useOnboarding';

export function Settings() {
  const { resetOnboarding } = useOnboarding();

  const handleResetOnboarding = () => {
    resetOnboarding();
    // Could add a toast notification here if @mantine/notifications is installed
    alert('Welcome tour will show again on your next visit to the home page.');
  };

  return (
    <Container size="md" py="xl">
      <Stack gap="lg">
        <Title order={2}>Settings</Title>

        <Paper shadow="xs" p="md" withBorder>
          <Stack gap="md">
            <div>
              <Text fw={500} size="lg" mb="xs">
                Onboarding
              </Text>
              <Text size="sm" c="dimmed" mb="md">
                Manage your welcome tour and introduction experience
              </Text>
            </div>

            <Group>
              <Button
                variant="light"
                leftSection={<IconRefresh size={16} />}
                onClick={handleResetOnboarding}
              >
                Reset Welcome Tour
              </Button>
              <Text size="sm" c="dimmed">
                Show the welcome modal again on your next visit
              </Text>
            </Group>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}