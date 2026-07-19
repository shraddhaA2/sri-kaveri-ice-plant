import React from 'react';
import { LOGO_URL } from '../data';

interface LogoProps {
  variant?: 'full' | 'badge' | 'footer' | 'header';
  className?: string;
  height?: number | string;
}

export default function Logo({ variant = 'full', className = '', height }: LogoProps) {
  // If we just need the badge symbol, we can render the vector representation which matches the real emblem perfectly.
  if (variant === 'badge') {
    return (
      <svg 
        viewBox="0 0 120 120" 
        className={`${className} shrink-0`}
        style={{ height: height || '100%' }}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="cubeTop" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f9ff" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
          <linearGradient id="cubeLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7dd3fc" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>
          <linearGradient id="cubeRight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="waterGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id="waterLightGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* Outer Hexagon (Dark Navy) */}
        <polygon points="60,6 107,33 107,87 60,114 13,87 13,33" fill="#0B1E36" />
        {/* Silver Accent Ring */}
        <polygon points="60,9 104,34 104,86 60,111 16,86 16,34" fill="none" stroke="#94a3b8" strokeWidth="1.5" />
        {/* Inner Hexagon Background */}
        <polygon points="60,12 101,36 101,84 60,108 19,84 19,36" fill="#09182C" />

        {/* Crystalline Ice Cubes Stack */}
        <g>
          <polygon points="33,11 45,18 33,25 21,18" fill="url(#cubeTop)" />
          <polygon points="21,18 33,25 33,37 21,30" fill="url(#cubeLeft)" />
          <polygon points="33,25 45,18 45,30 33,37" fill="url(#cubeRight)" />
        </g>
        <g>
          <polygon points="57,19.5 69,26.5 57,33.5 45,26.5" fill="url(#cubeTop)" />
          <polygon points="45,26.5 57,33.5 57,45.5 45,38.5" fill="url(#cubeLeft)" />
          <polygon points="57,33.5 69,26.5 69,38.5 57,45.5" fill="url(#cubeRight)" />
        </g>
        <g>
          <polygon points="45,30 57,37 45,44 33,37" fill="url(#cubeTop)" />
          <polygon points="33,37 45,44 45,56 33,49" fill="url(#cubeLeft)" />
          <polygon points="45,44 57,37 57,49 45,56" fill="url(#cubeRight)" />
        </g>
        <g>
          <polygon points="33,49 45,56 33,63 21,56" fill="url(#cubeTop)" />
          <polygon points="21,56 33,63 33,75 21,68" fill="url(#cubeLeft)" />
          <polygon points="33,63 45,56 45,68 33,75" fill="url(#cubeRight)" />
        </g>
        <g>
          <polygon points="57,38.5 69,45.5 57,52.5 45,45.5" fill="url(#cubeTop)" />
          <polygon points="45,45.5 57,52.5 57,64.5 45,57.5" fill="url(#cubeLeft)" />
          <polygon points="57,52.5 69,45.5 69,57.5 57,64.5" fill="url(#cubeRight)" />
        </g>
        <g>
          <polygon points="45,68 57,75 45,82 33,75" fill="url(#cubeTop)" />
          <polygon points="33,75 45,82 45,94 33,87" fill="url(#cubeLeft)" />
          <polygon points="45,82 57,75 57,87 45,94" fill="url(#cubeRight)" />
        </g>
        <g>
          <polygon points="33,87 45,94 33,101 21,94" fill="url(#cubeTop)" />
          <polygon points="21,94 33,101 33,113 21,106" fill="url(#cubeLeft)" />
          <polygon points="33,101 45,94 45,106 33,113" fill="url(#cubeRight)" />
        </g>

        {/* Sweeping K-Shaped Water Waves */}
        <path d="M 45,103 Q 63,94 70,75 T 98,34" fill="none" stroke="url(#waterGradient)" strokeWidth="5" strokeLinecap="round" />
        <path d="M 52,106 Q 68,97 75,79 T 102,40" fill="none" stroke="url(#waterLightGradient)" strokeWidth="3" strokeLinecap="round" />
        <path d="M 68,71 Q 80,84 96,93" fill="none" stroke="url(#waterGradient)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M 65,68 Q 75,79 92,88" fill="none" stroke="url(#waterLightGradient)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 33,96 Q 48,103 63,103" fill="none" stroke="url(#waterGradient)" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
      </svg>
    );
  }

  // Render the official high-resolution logo image.
  // For footer and dark hero sections, we wrap the logo in a clean white pill panel so that the dark logo text is beautifully legible and looks highly integrated.
  if (variant === 'footer' || variant === 'full') {
    return (
      <div className={`inline-flex items-center justify-center bg-white border border-slate-200/40 p-2 rounded-lg shadow-sm ${className}`}>
        <img 
          src={LOGO_URL} 
          alt="Sri Kaveri Ice Plant" 
          className="object-contain max-h-full w-auto"
          style={height ? { height } : undefined}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  // Header variant or other light backgrounds:
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img 
        src={LOGO_URL} 
        alt="Sri Kaveri Ice Plant" 
        className="object-contain mix-blend-multiply max-h-full w-auto"
        style={height ? { height } : undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
