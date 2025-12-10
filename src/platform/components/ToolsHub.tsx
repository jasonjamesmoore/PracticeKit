import { Grid, Card, Text, Button, Badge, Container, Title, Stack, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { toolRegistry } from '../ToolRegistry';

export function ToolsHub() {
  const navigate = useNavigate();

  return (
    <Container size="lg" py="xl">
      <Stack gap="lg">
        <div>
          <Title order={2} mb="xs">
            Music Learning Tools
          </Title>
          <Text c="dimmed">
            Choose a tool to start learning
          </Text>
        </div>

        <Grid>
          {toolRegistry.map((tool) => (
            <Grid.Col key={tool.id} span={{ base: 12, sm: 6, md: 6, lg: 4 }}>
              <Card shadow="sm" padding="lg" radius="md" withBorder h="100%">
                <Stack gap="md" h="100%">
                  {/* Icon and Label */}
                  <Group justify="space-between" align="flex-start">
                    <div>
                      <Text size="xl" fw={600}>
                        {tool.label}
                      </Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {tool.icon}
                    </div>
                  </Group>

                  {/* Description */}
                  <Text size="sm" c="dimmed" style={{ flex: 1 }}>
                    {tool.description}
                  </Text>

                  {/* Category Badge */}
                  <Badge size="sm" variant="light" style={{ alignSelf: 'flex-start' }}>
                    {tool.category}
                  </Badge>

                  {/* Open Tool Button */}
                  <Button
                    fullWidth
                    onClick={() => navigate(tool.path)}
                    mt="auto"
                  >
                    Open Tool
                  </Button>
                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
