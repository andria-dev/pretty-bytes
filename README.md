# @chbphone55/pretty-bytes

Format sizes from bytes to human readable strings

> ```js
> Convert bytes to human readable strings
> 1032192 → ['1,008', 'KiB', 'kibibytes']
> ```

_Note that this package uses base-2 (e.g. kibibyte) so every 1024 bytes is 1 KiB and 1024 KiB is 1 MiB. [Read about the difference between kilobyte and kibibyte.](https://web.archive.org/web/20150324153922/https://pacoup.com/2009/05/26/kb-kb-kib-whats-up-with-that/)_

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
format(0);
// => ['0', 'B', 'bytes']

format(-1);
// => ['-1', 'B', 'bytes']

format(1024);
// => ['1', 'KiB', 'kibibytes']

format(2621440);
// => ['2.5', 'MiB', 'mebibytes']

format(1041332);
// => ['1,016.926', 'KiB', 'kibibytes'];

format(1041332, 'es');
// => ['1.016,926', 'KiB', 'kibibytes']
```

### API

```ts
format(
  size: number,
  locale?: string = 'en'
): [string, Units.short, Units.long]
```

## License

MIT © 2019 [Christopher H. Brown](https://chrisbrown.netlify.com)
