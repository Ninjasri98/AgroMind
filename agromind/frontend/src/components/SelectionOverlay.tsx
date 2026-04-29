import React from 'react';

interface SelectionOverlayProps {
  label: string;
}

export const SelectionOverlay: React.FC<SelectionOverlayProps> = ({ label }) => {
  return (
    <div className="absolute -inset-3 border-2 border-black pointer-events-none z-50 transition-colors animate-pulse-border">
      {/* 4 Handles */}
      <div className="absolute -top-1.25 -left-1.25 w-2 h-2 bg-black"></div>
      <div className="absolute -top-1.25 -right-1.25 w-2 h-2 bg-black"></div>
      <div className="absolute -bottom-1.25 -left-1.25 w-2 h-2 bg-black"></div>
      <div className="absolute -bottom-1.25 -right-1.25 w-2 h-2 bg-black"></div>
      
      {/* Label */}
      <div className="absolute -top-0.5 left-3 h-7 bg-black text-white px-3 flex items-center font-serif text-[11px] uppercase tracking-widest leading-none">
        {label}
      </div>
    </div>
  );
};