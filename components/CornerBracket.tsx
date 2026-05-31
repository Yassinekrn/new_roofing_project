import React from 'react';

interface CornerBracketProps {
  position: 'tl' | 'tr' | 'bl' | 'br';
  size?: number;
  color?: string;
}

export function CornerBracket({ position, size = 20, color = '#c8a050' }: CornerBracketProps) {
  const positionClasses = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    bl: 'bottom-0 left-0',
    br: 'bottom-0 right-0',
  };

  const rotationMap = {
    tl: 0,
    tr: 90,
    bl: -90,
    br: 180,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      className={`absolute ${positionClasses[position]} pointer-events-none`}
      style={{ transform: `rotate(${rotationMap[position]}deg)` }}
    >
      <path d="M 2 2 L 2 10 M 2 2 L 10 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
