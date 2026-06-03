import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock do window.open
window.open = vi.fn();

// Mock do fetch global
global.fetch = vi.fn();

// Mock de metadados do navegador
Object.defineProperty(window, 'location', {
  value: {
    hostname: 'localhost',
    href: 'http://localhost/',
    search: '',
  },
  writable: true,
});
