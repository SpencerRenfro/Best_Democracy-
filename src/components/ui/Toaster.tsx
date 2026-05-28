// src/components/ui/Toaster.tsx
'use client';
// Lightweight accessible toast — no external dep needed
import { useEffect, useState } from 'react';

type Toast = { id: string; message: string; type: 'success' | 'error' | 'info' };

// Simple global event bus
const listeners: ((t: Toast) => void)[] = [];
export function toast(message: string, type: Toast['type'] = 'info') {
  const t: Toast = { id: crypto.randomUUID(), message, type };
  listeners.forEach(fn => fn(t));
}

export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const handler = (t: Toast) => {
      setToasts(prev => [...prev, t]);
      setTimeout(() => setToasts(prev => prev.filter(x => x.id !== t.id)), 5000);
    };
    listeners.push(handler);
    return () => { const i = listeners.indexOf(handler); if (i > -1) listeners.splice(i, 1); };
  }, []);

  if (!toasts.length) return null;

  return (
    <div
      aria-live="polite"
      aria-atomic="false"
      className="fixed bottom-6 right-6 z-[200] flex flex-col gap-2"
    >
      {toasts.map(t => (
        <div
          key={t.id}
          role="status"
          className={`flex items-start gap-3 px-5 py-4 rounded-sm shadow-xl max-w-sm text-white text-sm font-body animate-fade-up
            ${t.type === 'success' ? 'bg-bd-green' : t.type === 'error' ? 'bg-bd-red' : 'bg-bd-cobalt'}`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
