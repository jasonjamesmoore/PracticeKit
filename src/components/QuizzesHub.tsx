import { Grid, Card, Text, Button, Badge, Group, Stack, Container, Title } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { IconTarget, IconNotes, IconKeyboard, IconMusic } from '@tabler/icons-react';
import { Mode } from '@/types/Mode';
import { quizModes } from '@/QuizData/modeConfigs';

const modeOrder = [Mode.DEGREE_FINDER, Mode.NOTE_FINDER, Mode.KEY_FINDER, Mode.KEY_ONLY];

const modeIcons: Record<Mode, React.ReactNode> = {
  [Mode.DEGREE_FINDER]: <IconTarget size={32} />,
  [Mode.NOTE_FINDER]: <IconNotes size={32} />,
  [Mode.KEY_FINDER]: <IconKeyboard size={32} />,
  [Mode.KEY_ONLY]: <IconMusic size={32} />,
};

export function QuizzesHub() {
  const navigate = useNavigate();

  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={2} mb="xs">
            Music Theory Quizzes
          </Title>
          <Text c="dimmed">
            Choose a quiz mode to practice music theory concepts
          </Text>
        </div>

        <Grid>
          {modeOrder.map((mode) => {
            const config = quizModes[mode];
            return (
              <Grid.Col key={mode} span={{ base: 12, sm: 6, md: 6, lg: 3 }}>
                <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                  <Stack gap="md" h="100%">
                    {/* Icon and Label */}
                    <Group justify="space-between" align="flex-start">
                      <div>
                        <Text size="xl" fw={600}>
                          {config.label}
                        </Text>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {modeIcons[mode]}
                      </div>
                    </Group>

                    {/* Description */}
                    <Text size="sm" c="dimmed" style={{ flex: 1 }}>
                      {config.description}
                    </Text>

                    {/* Supported Features */}
                    <Group gap="xs">
                      {config.supportedFilters?.priority && (
                        <Badge size="xs" variant="light">
                          Filters
                        </Badge>
                      )}
                      {config.supportedFilters?.locking && (
                        <Badge size="xs" variant="light">
                          Locking
                        </Badge>
                      )}
                      {'variants' in config && config.variants && (
                        <Badge size="xs" variant="light">
                          Variants
                        </Badge>
                      )}
                    </Group>

                    {/* Quick Start Button */}
                    <Button
                      fullWidth
                      onClick={() => navigate(`/quiz/${mode}`)}
                      mt="auto"
                    >
                      Start Quiz
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            );
          })}
        </Grid>
      </Stack>
    </Container>
  );
}
