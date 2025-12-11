import { Modal, Stepper, Button, Text, Stack, Title, Group, ThemeIcon, SegmentedControl, Badge, Paper } from '@mantine/core';
import { useState } from 'react';
import { IconCards, IconFilter, IconLock, IconArrowsLeftRight } from '@tabler/icons-react';

interface FlashcardsOnboardingProps {
  opened: boolean;
  onClose: () => void;
}

export function FlashcardsOnboarding({ opened, onClose }: FlashcardsOnboardingProps) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Title order={3}>Welcome to Flashcards!</Title>}
      size="lg"
      centered
    >
      <Stack gap="lg">
        <Stepper active={activeStep} size="sm">
          <Stepper.Step label="Quiz Modes" description="Choose your practice">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="keyDeck">
                  <IconCards size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  Four Ways to Practice
                </Text>
              </Group>
              <Text c="dimmed">
                Flashcards offers four different quiz modes, each focusing on a different angle on the basics:
              </Text>
              <Stack gap="xs">
                <Paper p="sm" withBorder>
                  <Text fw={500} size="sm">Find the scale degree</Text>
                  <Text size="xs" c="dimmed">Given a key and note, identify the scale degree</Text>
                </Paper>
                <Paper p="sm" withBorder>
                  <Text fw={500} size="sm">Find the note</Text>
                  <Text size="xs" c="dimmed">Given a key and degree, identify the note</Text>
                </Paper>
                <Paper p="sm" withBorder>
                  <Text fw={500} size="sm">Find the key</Text>
                  <Text size="xs" c="dimmed">Given a note and degree, identify the key</Text>
                </Paper>
                <Paper p="sm" withBorder>
                  <Text fw={500} size="sm">Key Signature Quiz</Text>
                  <Text size="xs" c="dimmed">Practice converting between keys and signatures</Text>
                </Paper>
              </Stack>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Priority Filters" description="Focus your practice">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="noteDeck">
                  <IconFilter size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  Choose Your Focus
                </Text>
              </Group>
              <Text c="dimmed">
                Some quiz modes let you filter which degrees appear based on their musical context:
              </Text>
              <SegmentedControl
                fullWidth
                data={[
                  { label: 'Harmonic', value: 'harmonic' },
                  { label: 'Scale', value: 'scale' },
                ]}
                mt="xs"
                mb="xs"
              />
              <Stack gap="xs">
                <Group gap="xs">
                  <Badge size="sm" variant="light">Harmonic</Badge>
                  <Text size="sm" c="dimmed">Focus on chord tones, extensions (1, 3, 5, 7, 9, 11, 13 plus their alterations)</Text>
                </Group>
                <Group gap="xs">
                  <Badge size="sm" variant="light">Scale</Badge>
                  <Text size="sm" c="dimmed">Focus on all scale degrees (1-7 and their alterations)</Text>
                </Group>
              </Stack>
              <Text c="dimmed" size="sm" mt="xs">
                Look for this control at the top of compatible quiz modes!
              </Text>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Lock Feature" description="Practice variations">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="degreeDeck">
                  <IconLock size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  Lock to Focus
                </Text>
              </Group>
              <Text c="dimmed">
                Prompt cards have a lock feature that lets you practice with one element held constant while others change:
              </Text>
              <Paper p="md" withBorder mt="xs" mb="xs" maw={400} mx="auto">
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Text size="sm">Key: <strong>C major</strong></Text>
                    <Button size="xs" variant="subtle" leftSection={<IconLock size={14} />}>
                      Lock
                    </Button>
                  </Group>
                  <Text size="xs" c="dimmed">Note: F# • Degree: ?</Text>
                </Stack>
              </Paper>
              <Text c="dimmed" size="sm">
                Click the lock icon next to any prompt to keep it constant. Perfect for mastering one key at a time!
              </Text>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Variants" description="Switch directions">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="signatureDeck">
                  <IconArrowsLeftRight size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  Practice Both Directions
                </Text>
              </Group>
              <Text c="dimmed">
                The Key Signature Quiz has a special feature - you can switch between two directions:
              </Text>
              <Stack gap="xs" mt="xs" mb="xs">
                <Paper p="sm" withBorder>
                  <Text size="sm"><strong>Key → Signature:</strong> Given a key name, identify the number of sharps/flats</Text>
                </Paper>
                <Paper p="sm" withBorder>
                  <Text size="sm"><strong>Signature → Key:</strong> Given sharps/flats, identify the key</Text>
                </Paper>
              </Stack>
              <Button
                variant="light"
                color="dark"
                size="sm"
                fullWidth
              >
                Switch Direction (Key → Signature)
              </Button>
              <Text c="dimmed" size="sm" mt="xs" fw={500}>
                You're ready to start practicing! 🎵
              </Text>
            </Stack>
          </Stepper.Step>
        </Stepper>

        <Group justify="space-between" mt="xl">
          <Button variant="subtle" onClick={handlePrevious} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={handleNext}>
            {activeStep === 3 ? 'Start Practicing' : 'Next'}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
