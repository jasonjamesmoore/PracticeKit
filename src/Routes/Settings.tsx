import { Container, Title, Paper, Stack, Button, Text, Group } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import { useOnboarding } from '@/platform/hooks/useOnboarding';

export function Settings() {
  const platformOnboarding = useOnboarding();
  const flashcardsOnboarding = useOnboarding('flashcards');

  const handleResetPlatformOnboarding = () => {
    platformOnboarding.resetOnboarding();
    alert('Welcome tour will show again on your next visit to the home page.');
  };

  const handleResetFlashcardsOnboarding = () => {
    flashcardsOnboarding.resetOnboarding();
    alert('Flashcards tour will show again on your next visit to the Flashcards tool.');
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

            <Stack gap="md">
              <Group>
                <Button
                  variant="light"
                  leftSection={<IconRefresh size={16} />}
                  onClick={handleResetPlatformOnboarding}
                >
                  Reset Platform Tour
                </Button>
                <Text size="sm" c="dimmed">
                  Show the welcome modal again
                </Text>
              </Group>

              <Group>
                <Button
                  variant="light"
                  leftSection={<IconRefresh size={16} />}
                  onClick={handleResetFlashcardsOnboarding}
                >
                  Reset Flashcards Tour
                </Button>
                <Text size="sm" c="dimmed">
                  Show the flashcards tutorial again
                </Text>
              </Group>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}