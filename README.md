# @chbphone55/pretty-bytes

Format sizes from bytes to human readable strings

> Convert bytes to a human readable string `1032192` -> `['1,008', 'KiB', 'kibibytes']`

_Note that this package uses base-2 (e.g. kibibyte) [Read about the difference between kilobyte and kibibyte.](https://web.archive.org/web/20150324153922/https://pacoup.com/2009/05/26/kb-kb-kib-whats-up-with-that/)_

## Usage

### Install

To install the package, use a package manager to access the NPM registry.

```bash
pnpm install @chbphone55/pretty-bytes

# or

yarn add @chbphone55/pretty-bytes
```

### Import

The function is exported as `format`.

```js
import { format } from '@chbphone55/pretty-bytes';

// or

const { format } = require('@chbphone55/pretty-bytes');
```

### Example

To use `format`, pass it the size of your file in bytes. Optionally, you can pass in a locale as the second argument. _The locale defaults to `en`._

```js
```

### API

```ts
format(
  size: number,
  locale?: string = 'en'
): [string, Units.short, Units.long]
```
