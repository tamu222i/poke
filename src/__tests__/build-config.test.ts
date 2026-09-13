import { describe, it, expect } from 'vitest';
import viteConfig from '../../vite.config';

import fs from 'fs';
import path from 'path';

describe('Feature: GitHub Pages Build Configuration', () => {
  it('Scenario: Vite configuration specifies relative base path for GitHub Pages subfolder compatibility', async () => {
    // Given the vite configuration
    const config = typeof viteConfig === 'function' ? await viteConfig({ command: 'build', mode: 'production' }) : viteConfig;

    // Then base should be './' or relative path so that https://username.github.io/repo-name/ correctly resolves assets
    expect(config.base).toBe('./');
  });

  it('Scenario: Built dist/index.html uses relative paths (./assets/) instead of absolute root paths (/assets/)', () => {
    const distIndexPath = path.resolve(process.cwd(), 'dist/index.html');
    if (fs.existsSync(distIndexPath)) {
      const html = fs.readFileSync(distIndexPath, 'utf-8');
      expect(html).toContain('src="./assets/');
      expect(html).toContain('href="./assets/');
      expect(html).not.toMatch(/(src|href)="\/assets\//);
    }
  });
});

