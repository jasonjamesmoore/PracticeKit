import { Card, Text, Group, Button, Stack, ActionIcon, Box, useComputedColorScheme } from '@mantine/core';
import { IconLock, IconLockOpen } from '@tabler/icons-react';

type DeckType = 'key' | 'note' | 'degree' | 'signature';

interface PromptCard {
  label: string;           // "Key", "Note", "Degree"
  value: string;           // "C", "E", "3"
  deckType: DeckType;
  isLocked?: boolean;
  onToggleLock?: () => void;
}

interface AnswerCard {
  value: string;
  deckType: DeckType;
}

export interface FlashCardProps {
  prompts: PromptCard[];
  answer: AnswerCard;
  isRevealed: boolean;
  onReveal: () => void;
  onNext: () => void;
  title?: string;
}

// Color scheme by deck type
const DECK_COLORS: Record<DeckType, string> = {
  key: 'keyDeck',
  note: 'noteDeck',
  degree: 'degreeDeck',
  signature: 'signatureDeck',
};

// Deck labels
const DECK_LABELS: Record<DeckType, string> = {
  key: 'Keys',
  note: 'Notes',
  degree: 'Degrees',
  signature: 'Signatures',
};

export function FlashCard({ 
  prompts, 
  answer, 
  isRevealed, 
  onReveal, 
  onNext,
  title 
}: FlashCardProps) {
  const computedColorScheme = useComputedColorScheme('light');
  const isDark = computedColorScheme === 'dark';
  
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder bg={isDark ? 'dark.4' : undefined}>
      <Stack gap="md">
        {title && (
          <Text size="lg" fw={600} ta="center">
            {title}
          </Text>
        )}
        
        {/* Prompt Section */}
        <Stack gap="xs">
          <Group justify="center" gap="lg" wrap="wrap">
            {prompts.map((prompt, index) => (
              <Box key={index} style={{ position: 'relative' }}>
                <Text size="xs" c="dimmed" fw={500} mb="xs" ta="center">
                  {DECK_LABELS[prompt.deckType]}
                </Text>
                <Card 
                  bg={`var(--mantine-color-${DECK_COLORS[prompt.deckType]}-1)`}
                  padding="md" 
                  radius="sm"
                  style={{ 
                    border: `2px solid var(--mantine-color-${DECK_COLORS[prompt.deckType]}-3)`,
                    width: '140px',
                    minHeight: '100px',
                  }}
                >
                  <Box style={{ position: 'relative' }}>
                    {/* Lock button in top-right */}
                    {prompt.onToggleLock && (
                      <ActionIcon
                        size="xs"
                        variant="subtle"
                        onClick={prompt.onToggleLock}
                        style={{ position: 'absolute', top: -8, right: -8 }}
                      >
                        {prompt.isLocked ? (
                          <IconLock size={16} />
                        ) : (
                          <IconLockOpen size={16} />
                        )}
                      </ActionIcon>
                    )}
                    <Stack gap="xs" align="center" justify="center" h="100%">
                      <Text size="sm" c="dimmed" fw={500}>
                        {prompt.label}
                      </Text>
                      <Text size="xl" fw={700} c={isDark ? 'dark.9' : 'dark.9'}>
                        {prompt.value}
                      </Text>
                    </Stack>
                  </Box>
                </Card>
              </Box>
            ))}
          </Group>
        </Stack>

        {/* Answer Section */}
        <Stack gap="xs" align="center">
          <Text size="xs" c="dimmed" fw={500} ta="center">
            {DECK_LABELS[answer.deckType]}
          </Text>
          <Card 
            bg={`var(--mantine-color-${DECK_COLORS[answer.deckType]}-2)`}
            padding="md" 
            radius="sm"
            style={{ 
              border: `2px solid var(--mantine-color-${DECK_COLORS[answer.deckType]}-4)`,
              width: '140px',
              minHeight: '100px',
              opacity: isRevealed ? 1 : 0.6,
            }}
          >
            <Stack gap="xs" align="center" justify="center" h="100%">
              <Text size="sm" c="dimmed" fw={500}>
                Answer
              </Text>
              <Text size="xl" fw={700} c={isDark ? 'dark.9' : 'dark.9'}>
                {isRevealed ? answer.value : "?"}
              </Text>
            </Stack>
          </Card>
        </Stack>

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

// import { Card, Text, Group, Button, Stack } from '@mantine/core';

// export interface FlashCardProps {
//   prompts: Array<{ label: string; value: string }>;
//   answer?: string;
//   isRevealed: boolean;
//   onReveal: () => void;
//   onNext: () => void;
//   title?: string;
// }

// export function FlashCard({ 
//   prompts, 
//   answer, 
//   isRevealed, 
//   onReveal, 
//   onNext,
//   title 
// }: FlashCardProps) {
//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Stack gap="md">
//         {title && (
//           <Text size="lg" fw={600} ta="center">
//             {title}
//           </Text>
//         )}
        
//         {/* Prompt Section */}
//         <Group justify="center" gap="lg">
//           {prompts.map((prompt, index) => (
//             <Card key={index} bg="blue.1" padding="md" radius="sm">
//               <Stack gap="xs" align="center">
//                 <Text size="sm" c="dimmed" fw={500}>
//                   {prompt.label}
//                 </Text>
//                 <Text size="xl" fw={700}>
//                   {prompt.value}
//                 </Text>
//               </Stack>
//             </Card>
//           ))}
//         </Group>

//         {/* Answer Section */}
//         <Card bg={isRevealed ? "green.1" : "gray.1"} padding="md" radius="sm">
//           <Stack gap="xs" align="center">
//             <Text size="sm" c="dimmed" fw={500}>
//               Answer
//             </Text>
//             <Text size="xl" fw={700} c={isRevealed ? "green.9" : "gray.6"}>
//               {isRevealed ? answer : "?"}
//             </Text>
//           </Stack>
//         </Card>

//         {/* Action Buttons */}
//         <Group justify="center" gap="md">
//           {!isRevealed ? (
//             <Button onClick={onReveal} size="lg" variant="filled">
//               Reveal Answer
//             </Button>
//           ) : (
//             <Button onClick={onNext} size="lg" variant="light">
//               Next Card
//             </Button>
//           )}
//         </Group>
//       </Stack>
//     </Card>
//   );
// }