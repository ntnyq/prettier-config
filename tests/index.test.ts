import { format } from 'prettier'
import { describe, expect, it } from 'vitest'
import { defineConfig } from '../src'
import {
  FIXTURE_CSS,
  FIXTURE_HTML,
  FIXTURE_IGNORE,
  FIXTURE_JSON,
  FIXTURE_TS,
  FIXTURE_YAML,
} from './fixtures'

describe('default config', () => {
  const config = defineConfig()

  it('fixture - ts', async () => {
    const result = await format(FIXTURE_TS, { ...config, parser: 'typescript' })
    expect(result).toMatchInlineSnapshot(`
      "// @ts-nocheck

      // singleQuote: true
      console.log('hello world')

      // tabWidth: 2
      console.log('hello world')

      // semi: false
      const name = 'foobar'

      // printWidth: 80
      foo(
        reallyLongArg(),
        omgSoManyParameters(),
        IShouldRefactorThis(),
        isThereSeriouslyAnotherOne(),
      )

      // arrowParens: 'avoid'
      const isOdd = n => n % 2 === 1

      // trailingComma: 'none'
      const arr = {
        name: 'foobar',
        age: 123,
      }

      // quoteProps: 'as-needed'
      const foobar = {
        name: 'foobar',
      }

      // endOfLine: 'lf'
      "
    `)
  })

  it('fixture - css', async () => {
    const result = await format(FIXTURE_CSS, { ...config, parser: 'css' })
    expect(result).toMatchInlineSnapshot(`""`)
  })

  it('fixture - html', async () => {
    const result = await format(FIXTURE_HTML, { ...config, parser: 'html' })
    expect(result).toMatchInlineSnapshot(`
      "<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, viewport-fit=cover"
          />
          <title>Hello world</title>
        </head>
        <body>
          <div
            id="foo-bar-baz"
            class="bar-foo-baz"
            title="a sample title"
            data-foo="bar"
            data-bar="baz"
          >
            lorem ipsum
          </div>
        </body>
      </html>
      "
    `)
  })

  it('fixture - json', async () => {
    const result = await format(FIXTURE_JSON, { ...config, parser: 'json' })
    expect(result).toMatchInlineSnapshot(`
      "{
        "name": "foobar",
        "fruits": [
          "apple",
          "banana",
          "pear",
          "orange",
          "mango",
          "grape",
          "watermelon",
          "peach",
          "pineapple",
          "strawberry"
        ]
      }
      "
    `)
  })

  it('fixture - yaml', async () => {
    const result = await format(FIXTURE_YAML, { ...config, parser: 'yaml' })
    expect(result).toMatchInlineSnapshot(`
      "package: twoslash-prettier
      description: Prettier-backed twoslash runner.
      "
    `)
  })

  it('fixture - ignore', async () => {
    const result = await format(FIXTURE_IGNORE, {
      ...config,
      parser: 'typescript',
    })
    expect(result).toMatchInlineSnapshot(`
      "// prettier-ignore
      {
              console.log('hello world')
      }
      "
    `)
  })
})
