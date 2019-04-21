import test from 'ava';
import { format } from './dist/index.js';

test('Numbers are correctly converted to their type every 1024 of the last size', t => {
  const startValues = [
    ['1', 'B', 'bytes'],
    ['1', 'KiB', 'kibibytes'],
    ['1', 'MiB', 'mebibytes'],
    ['1', 'GiB', 'gibibytes'],
    ['1', 'TiB', 'tebibytes'],
    ['1', 'PiB', 'pebibytes'],
    ['1', 'EiB', 'exbibytes'],
    ['1', 'ZiB', 'zebibytes'],
    ['1', 'YiB', 'yobibytes']
  ];
  const endValues = [
    ['1,023', 'B', 'bytes'],
    ['1,023', 'KiB', 'kibibytes'],
    ['1,023', 'MiB', 'mebibytes'],
    ['1,023', 'GiB', 'gibibytes'],
    ['1,023', 'TiB', 'tebibytes'],
    ['1,023', 'PiB', 'pebibytes'],
    ['1,023', 'EiB', 'exbibytes'],
    ['1,023', 'ZiB', 'zebibytes'],
    ['1,023', 'YiB', 'yobibytes']
  ];

  for (let i = 0; i < startValues.length; ++i) {
    const start = startValues[i];
    const end = endValues[i];

    const startNumber = 1024 ** i;
    const endNumber = 1024 ** (i + 1) - startNumber;

    t.deepEqual(format(startNumber), start);
    t.deepEqual(format(endNumber), end);
  }
});

test('Negative numbers and 0 should be treated like positive ones', t => {
  t.deepEqual(format(0), ['0', 'B', 'bytes'], '0 should result in 0 bytes');
  t.deepEqual(
    format(-1),
    ['-1', 'B', 'bytes'],
    'Negative numbers should be treated the same'
  );
});

test('Custom locale support', t => {});
