const UNITS = [
  ['B', 'bytes'],
  ['KiB', 'kibibytes'],
  ['MiB', 'mebibytes'],
  ['GiB', 'gibibytes'],
  ['TiB', 'tebibytes'],
  ['PiB', 'pebibytes'],
  ['EiB', 'exbibytes'],
  ['ZiB', 'zebibytes'],
  ['YiB', 'yobibytes']
];

export function format(size: number, locale = 'en') {
  // We are solving for `x` in this equation: 1024^x = size
  // log2(size)/log2(1024) === log2(size)/10 === log1024(size)
  const magnitude = Math.min(Math.floor(Math.log2(size) / 10), UNITS.length);

  const formattedSize = parseFloat(
    (size / 1024 ** magnitude).toFixed(3)
  ).toLocaleString(locale);

  return [formattedSize, ...UNITS[magnitude]];
}
