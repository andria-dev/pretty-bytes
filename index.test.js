import test from 'ava';
import { format } from './dist/index.js';

test.only('Numbers are correctly converted to their type every 1024 of the last size', t => {
  const values = [
    ['1', 'B', 'Bytes'],
    ['1023', 'B', 'Bytes'],
    ['1', 'KiB', 'Kibibytes'],
    ['1023', 'KiB', 'Kibibytes'],
    ['1', 'MiB', 'Mebibytes'],
    ['1023', 'MiB', 'Mebibytes'],
    ['1', 'GiB', 'Gibibytes'],
    ['1023', 'GiB', 'Gibibytes'],
    ['1', 'TiB', 'Tebibytes'],
    ['1023', 'TiB', 'Tebibytes'],
    ['1', 'PiB', 'Pebibytes'],
    ['1023', 'PiB', 'Pebibytes'],
    ['1', 'EiB', 'Exbibytes'],
    ['1023', 'EiB', 'Exbibytes'],
    ['1', 'ZiB', 'Zebibytes'],
    ['1023', 'ZiB', 'Zebibytes'],
    ['1', 'YiB', 'Yobibytes'],
    ['1023', 'YiB', 'Yobibytes']
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
