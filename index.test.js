import test from 'ava';
import { format } from './dist/index.js';

test.only('Numbers are correctly converted to their type every 1024 of the last size', t => {
  const values = [
    ['1', 'B', 'bytes'],
    ['1023', 'B', 'bytes'],
    ['1', 'KiB', 'kibibytes'],
    ['1023', 'KiB', 'kibibytes'],
    ['1', 'MiB', 'mebibytes'],
    ['1023', 'MiB', 'mebibytes'],
    ['1', 'GiB', 'gibibytes'],
    ['1023', 'GiB', 'gibibytes'],
    ['1', 'TiB', 'tebibytes'],
    ['1023', 'TiB', 'tebibytes'],
    ['1', 'PiB', 'pebibytes'],
    ['1023', 'PiB', 'pebibytes'],
    ['1', 'EiB', 'exbibytes'],
    ['1023', 'EiB', 'exbibytes'],
    ['1', 'ZiB', 'zebibytes'],
    ['1023', 'ZiB', 'zebibytes'],
    ['1', 'YiB', 'yobibytes'],
    ['1023', 'YiB', 'yobibytes']
  ];

  for (let index = 0; index < values.length; ++index) {
    let number;
    if (index % 2 === 0) {
      // 0, 2, 4
      number = 1024 ** index;
    } else {
      // 1, 3, 5
      number = 1024 ** (index + 1) - 1024 ** index;
    }

    t.deepEqual(format(number), values[index]);
  }
});

test('Negative numbers should be treated like positive ones', t => {});

test('Custom locale support', t => {});
