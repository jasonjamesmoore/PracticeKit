import { Card, Text, Group, Button, Stack } from '@mantine/core';

export interface FlashCardProps {
  prompts: Array<{ label: string; value: string }>;
  answer?: string;
  isRevealed: boolean;
  onReveal: () => void;
  onNext: () => void;
  title?: string;
}

export function FlashCard({ 
  prompts, 
  answer, 
  isRevealed, 
  onReveal, 
  onNext,
  title 
}: FlashCardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack gap="md">
        {title && (
          <Text size="lg" fw={600} ta="center">
            {title}
          </Text>
        )}
        
        {/* Prompt Section */}
        <Group justify="center" gap="lg">
          {prompts.map((prompt, index) => (
            <Card key={index} bg="blue.1" padding="md" radius="sm">
              <Stack gap="xs" align="center">
                <Text size="sm" c="dimmed" fw={500}>
                  {prompt.label}
                </Text>
                <Text size="xl" fw={700}>
                  {prompt.value}
                </Text>
              </Stack>
            </Card>
          ))}
        </Group>

        {/* Answer Section */}
        <Card bg={isRevealed ? "green.1" : "gray.1"} padding="md" radius="sm">
          <Stack gap="xs" align="center">
            <Text size="sm" c="dimmed" fw={500}>
              Answer
            </Text>
            <Text size="xl" fw={700} c={isRevealed ? "green.9" : "gray.6"}>
              {isRevealed ? answer : "?"}
            </Text>
          </Stack>
        </Card>

        {/* Action Buttons */}
        <Group justify="center" gap="md">
          {!isRevealed ? (
            <Button onClick={onReveal} size="lg" variant="filled">
              Reveal Answer
            </Button>
          ) : (
            <Button onClick={onNext} size="lg" variant="light">
              Next Card
            </Button>
          )}
        </Group>
      </Stack>
    </Card>
  );
}