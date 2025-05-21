import type { Config } from 'prettier'

// @keep-sorted
export const DEFAULT_CONFIG: Config = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  experimentalOperatorPosition: 'start',
  experimentalTernaries: false,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: true,
  objectWrap: 'preserve',
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  rangeEnd: Number.POSITIVE_INFINITY,
  rangeStart: 0,
  requirePragma: false,
  semi: false,
  singleAttributePerLine: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  vueIndentScriptAndStyle: false,
}

/**
 * @deprecated use `DEFAULT_CONFIG` instead
 */
export const config: Config = DEFAULT_CONFIG

/**
 * Define Prettier config
 *
 * @param config - Prettier config
 * @returns Prettier config
 */
export function defineConfig(config: Config = {}): Config {
  const mergedConfig: Config = {
    ...DEFAULT_CONFIG,
    ...config,
  }
  return mergedConfig
}

/**
 * @deprecated use `DEFAULT_CONFIG` instead
 */
export default config
