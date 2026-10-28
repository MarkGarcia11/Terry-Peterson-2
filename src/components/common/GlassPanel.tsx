import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'dark' | 'light' | 'card';
  hoverEffect?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  variant = 'dark',
  hoverEffect = false,
}) => {
  const baseClasses = {
    dark: 'glass-panel rounded-xl text-white',
    light: 'glass-panel-light rounded-xl text-[#423E37]',
    card: 'glass-card rounded-xl text-white',
  }[variant];

  const hoverClass = hoverEffect
    ? 'transition-all duration-400 ease-out hover:border-[#B8905A]/40 hover:shadow-xl hover:-translate-y-1'
    : '';

  return (
    <div className={`p-6 sm:p-8 md:p-10 ${baseClasses} ${hoverClass} ${className}`}>
      {children}
    </div>
  );
};
