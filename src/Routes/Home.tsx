import { useState } from "react";
import { ModeSelect } from "@/components/ModeSelect";
import { Mode } from "@/types/Mode";
import { DegreeFinder } from "@/quizModes/DegreeFinder";
import { NoteFinder } from "@/quizModes/NoteFinder";
import { KeyFinder } from "@/quizModes/KeyFinder";
import { KeyOnly } from "@/quizModes/KeyOnly";


export function Home() {
  const [mode, setMode] = useState<Mode>(Mode.KEY_ONLY);

  return (
    <>
    <ModeSelect value={mode} onChange={setMode} />
    {/* conditional rendering of the quiz mode */}
    {mode === Mode.DEGREE_FINDER && <DegreeFinder />}
    {mode === Mode.NOTE_FINDER && <NoteFinder />}
    {mode === Mode.KEY_FINDER && <KeyFinder />}
    {mode === Mode.KEY_ONLY && <KeyOnly />}
    </>
  );
}
