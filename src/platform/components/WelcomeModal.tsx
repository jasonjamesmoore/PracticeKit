import { Modal, Stepper, Button, Text, Stack, Title, List, ThemeIcon, Group, Breadcrumbs, Anchor } from '@mantine/core';
import { useState } from 'react';
import { IconTools, IconRoute, IconSparkles, IconArrowLeft } from '@tabler/icons-react';

interface WelcomeModalProps {
  opened: boolean;
  onClose: () => void;
}

export function WelcomeModal({ opened, onClose }: WelcomeModalProps) {
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
      title={<Title order={3}>Welcome to PracticeKit! 🎼</Title>}
      size="lg"
      centered
    >
      <Stack gap="lg">
        <Stepper active={activeStep} size="sm">
          <Stepper.Step label="Welcome" description="Get started">
            <Stack gap="md" mt="xl">
              <Text size="lg" fw={500}>
                Welcome to your music learning companion
              </Text>
              <Text c="dimmed">
                PracticeKit is designed to help you master music theory and develop your musical skills through interactive, focused practice tools.
              </Text>
              <Text c="dimmed">
                Whether you're a beginner learning the fundamentals or an experienced musician sharpening your skills, PracticeKit grows with you.
              </Text>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Tools Hub" description="Your dashboard">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="blue">
                  <IconTools size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  Explore Learning Tools
                </Text>
              </Group>
              <Text c="dimmed">
                The Tools Hub is your home base. Each card represents a different learning tool to help you practice specific musical skills.
              </Text>
              <List spacing="sm" size="sm" c="dimmed">
                <List.Item>
                  <strong>Flashcards</strong> - Currently available for music theory practice
                </List.Item>
                <List.Item>
                  <strong>More tools coming soon</strong> - Ear training, sight reading, and practice utilities
                </List.Item>
              </List>
              <Text c="dimmed" size="sm" fs="italic">
                Click any tool card to dive in and start learning!
              </Text>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Navigation" description="Finding your way">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="violet">
                  <IconRoute size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  Navigate with Ease
                </Text>
              </Group>
              <Text c="dimmed">
                PracticeKit is designed to be intuitive and easy to navigate:
              </Text>
              <List spacing="sm" size="sm" c="dimmed">
                <List.Item>
                  <strong>Breadcrumbs</strong> at the top show where you are and let you jump back quickly
                  <Breadcrumbs mt="xs" mb="xs">
                    <Anchor size="sm">Home</Anchor>
                    <Anchor size="sm">Flashcards</Anchor>
                    <Anchor size="sm">Find the scale degree</Anchor>
                  </Breadcrumbs>
                </List.Item>
                <List.Item>
                  <strong>Sidebar menu</strong> provides quick access to Tools and Settings
                </List.Item>
                <List.Item>
                  <strong>Switch Mode buttons</strong> help you change activities without losing your place
                  <Group mt="xs" mb="xs">
                    <Button
                      variant="subtle"
                      leftSection={<IconArrowLeft size={16} />}
                      size="sm"
                    >
                      Switch Quiz Mode
                    </Button>
                  </Group>
                </List.Item>
              </List>
            </Stack>
          </Stepper.Step>

          <Stepper.Step label="Get Started" description="Begin your journey">
            <Stack gap="md" mt="xl">
              <Group gap="xs">
                <ThemeIcon size="lg" variant="light" color="green">
                  <IconSparkles size={20} />
                </ThemeIcon>
                <Text size="lg" fw={500}>
                  You're All Set!
                </Text>
              </Group>
              <Text c="dimmed">
                You're ready to start your musical journey. Here are some tips to get the most out of PracticeKit:
              </Text>
              <List spacing="sm" size="sm" c="dimmed">
                <List.Item>
                  <strong>Practice regularly</strong> - Even 10-15 minutes daily makes a difference
                </List.Item>
                <List.Item>
                  <strong>Explore different modes</strong> - Each tool has multiple practice modes to keep things fresh
                </List.Item>
                <List.Item>
                  <strong>Adjust settings</strong> - Customize your experience in the Settings page
                </List.Item>
                <List.Item>
                  <strong>Stay tuned</strong> - New tools and features are on the way!
                </List.Item>
              </List>
            </Stack>
          </Stepper.Step>
        </Stepper>

        <Group justify="space-between" mt="xl">
          <Button variant="subtle" onClick={handlePrevious} disabled={activeStep === 0}>
            Back
          </Button>
          <Button onClick={handleNext}>
            {activeStep === 3 ? 'Get Started' : 'Next'}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}
