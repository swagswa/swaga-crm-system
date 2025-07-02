"use client";

import React from 'react';
import { Emoji } from 'emoji-picker-react';

interface AppleEmojiProps {
  emoji: string;
  size?: number;
  className?: string;
}

export function AppleEmoji({ emoji, size = 24, className = '' }: AppleEmojiProps) {
  // Convert emoji character to unified code
  const getUnified = (emoji: string) => {
    const codePoint = emoji.codePointAt(0);
    if (codePoint) {
      return codePoint.toString(16).toLowerCase();
    }
    return '';
  };

  const unified = getUnified(emoji);

  if (!unified) {
    return <span className={className}>{emoji}</span>;
  }

  return (
    <span className={className}>
      <Emoji
        unified={unified}
        size={size}
        emojiStyle="apple"
      />
    </span>
  );
}