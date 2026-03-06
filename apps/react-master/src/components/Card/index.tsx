import React from 'react';
export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-white border border-slate-200 m-4 rounded-sm shadow-md p-4 ${className || ''}`}>{children}</div>
  );
}
