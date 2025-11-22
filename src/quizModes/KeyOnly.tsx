import { useState, useEffect } from 'react';
import { Button, Flex, Stack } from '@mantine/core';
import { Quiz } from '@/components/Quiz';
import { quizModes } from '@/QuizData/modeConfigs';
import { Mode } from '@/types/Mode';
import { QuizMode } from '@/types/Quiz';

export function KeyOnly() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [activeVariant, setActiveVariant] = useState<QuizMode | null>(null);
  
  useEffect(() => {
    updateVariant();
  }, [variantIndex]);
  
  function updateVariant() {
    const baseConfig = quizModes[Mode.KEY_ONLY];
    if (!baseConfig.variants) {
      return;
    }
    
    const variant = baseConfig.variants[variantIndex];
    
    // Merge variant with base config
    const mergedConfig: QuizMode = {
      ...baseConfig,
      promptDecks: variant.promptDecks,
      answerDeck: variant.answerDeck,
      computeAnswer: variant.computeAnswer,
    };
    
    setActiveVariant(mergedConfig);
  }
  
  function toggleVariant() {
    const baseConfig = quizModes[Mode.KEY_ONLY];
    if (!baseConfig.variants) {
      return;
    }
    setVariantIndex((prev) => (prev + 1) % baseConfig.variants!.length);
  }
  
  if (!activeVariant) {
    return null;
  }
  
  return (
    <Stack gap="md">
      <Flex justify="center" >
      <Button 
        onClick={toggleVariant} 
        variant="light"
        color="dark"
        size="md"
        mt="md"
        >
        Switch Direction ({variantIndex === 0 ? 'Key → Signature' : 'Signature → Key'})
      </Button>
      </Flex>
      <Quiz modeConfig={activeVariant} />
    </Stack>
  );
}