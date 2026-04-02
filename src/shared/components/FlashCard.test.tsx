import { describe, expect, it, vi } from 'vitest';
import { render, screen, userEvent } from '@/../test-utils';
import { FlashCard } from './FlashCard';

describe('FlashCard', () => {
  it('reveals the answer after the user clicks Reveal Answer', async () => {
    const user = userEvent.setup();
    const onReveal = vi.fn();

    render(
      <FlashCard
        title="Find the degree"
        prompts={[
          {
            label: 'Key',
            value: 'C',
            deckType: 'key',
          },
          {
            label: 'Note',
            value: 'E',
            deckType: 'note',
          },
        ]}
        answer={{
          value: '3',
          deckType: 'degree',
        }}
        isRevealed={false}
        onReveal={onReveal}
        onNext={vi.fn()}
      />
    );

    expect(screen.getByText('?')).toBeInTheDocument();
    expect(screen.queryByText('3')).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /reveal answer/i }));

    expect(onReveal).toHaveBeenCalledTimes(1);
  });

  it('shows Next Card button after reveal and calls onNext when clicked', async () => {
    const user = userEvent.setup();
    const onNext = vi.fn();

    render(
      <FlashCard
        title="Find the degree"
        prompts={[
          {
            label: 'Key',
            value: 'C',
            deckType: 'key',
          },
          {
            label: 'Note',
            value: 'E',
            deckType: 'note',
          },
        ]}
        answer={{
          value: '3',
          deckType: 'degree',
        }}
        isRevealed
        onReveal={vi.fn()}
        onNext={onNext}
      />
    );

    expect(screen.getByRole('button', { name: /next card/i })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /reveal answer/i })).not.toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /next card/i }));

    expect(onNext).toHaveBeenCalledTimes(1);
  });

  it('calls onToggleLock when the lock button is clicked', async () => {
    const user = userEvent.setup();
    const onToggleLock = vi.fn();

    render(
      <FlashCard
        title="Find the degree"
        prompts={[
          {
            label: 'Key',
            value: 'C',
            deckType: 'key',
            isLocked: false,
            onToggleLock,
          },
        ]}
        answer={{
          value: '3',
          deckType: 'degree',
        }}
        isRevealed={false}
        onReveal={vi.fn()}
        onNext={vi.fn()}
      />
    );

    const lockButton = screen.getAllByRole('button')[0];
    await user.click(lockButton);

    expect(onToggleLock).toHaveBeenCalledTimes(1);
  });
});
