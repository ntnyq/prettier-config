import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  platform: 'neutral',
  dts: {
    tsgo: true,
  },
})
