import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    formatters: true,
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'no-console': 'off',
    },
  },
)
