import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface MagneticButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost' | 'light';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  showArrow?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  showArrow = true,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * 0.15;
    const distanceY = (clientY - centerY) * 0.15;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-[0.9375rem]',
    lg: 'px-8 py-4.5 text-base',
  }[size];

  const variantClasses = {
    primary:
      'bg-[#B8905A] text-white hover:bg-[#C9A46E] border border-[#B8905A] shadow-lg shadow-[#B8905A]/15 active:scale-[0.98]',
    secondary:
      'bg-transparent text-white border border-[#D9D3C9]/30 hover:border-[#B8905A] hover:text-[#B8905A] hover:bg-white/[0.04] active:scale-[0.98]',
    ghost:
      'bg-transparent text-[#B8905A] hover:text-white hover:bg-white/[0.05] border border-transparent active:scale-[0.98]',
    light:
      'bg-[#423E37] text-white hover:bg-[#2E2B26] border border-[#423E37] shadow-sm active:scale-[0.98]',
  }[variant];

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`group relative inline-flex items-center justify-center font-medium tracking-wide rounded-md transition-all duration-300 select-none ${sizeClasses} ${variantClasses} ${
        disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'
      } ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="transition-transform duration-300 group-hover:scale-110">{icon}</span>}
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-current opacity-80 group-hover:opacity-100" />
        )}
      </span>
    </div>
  );

  if (to) {
    return <Link to={to} className="inline-block">{content}</Link>;
  }

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className="inline-block">
      {content}
    </button>
  );
};
