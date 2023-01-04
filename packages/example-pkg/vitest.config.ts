import { baseConfig } from '@toolchain/vite-config'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    ...baseConfig,
  },
})
