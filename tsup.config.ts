import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  minify: true,
  sourcemap: true,
  clean: true,
  outDir: 'dist',
  target: 'es2020',
  splitting: false,
  treeshake: true,
  shims: false
});
