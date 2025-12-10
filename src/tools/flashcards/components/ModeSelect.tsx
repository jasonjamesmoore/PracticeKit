import { SegmentedControl } from "@mantine/core";
import { quizModes } from "../data/modeConfigs";
import { FlashcardMode } from "../types/FlashcardMode";

interface ModeSelectProps {
    value: FlashcardMode;
    onChange: (mode: FlashcardMode) => void;
};

export function ModeSelect({value, onChange}: ModeSelectProps) {
    const availableModes = Object.values(quizModes).map((mode) => ({
        label: mode.label,
        value: mode.id,
    }));
    return (
        <SegmentedControl
          value={value}
          onChange={(val: string) => onChange(val as FlashcardMode)}
          data={availableModes}
          fullWidth
          size="md"
        />
      );
}