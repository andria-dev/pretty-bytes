export namespace Units {
  export type short =
    | 'B'
    | 'KiB'
    | 'MiB'
    | 'GiB'
    | 'TiB'
    | 'PiB'
    | 'EiB'
    | 'ZiB'
    | 'YiB';
  export type long =
    | 'bytes'
    | 'kibibytes'
    | 'mebibytes'
    | 'gibibytes'
    | 'tebibytes'
    | 'pebibytes'
    | 'exbibytes'
    | 'zebibytes'
    | 'yobibytes';
}

export const UNITS: Array<[Units.short, Units.long]> = [
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

export function format(
  size: number,
  locale: string = 'en'
): [string, Units.short, Units.long] {
  // Make negative numbers positive
  const prefix = size < 0 ? '-' : '';
  size = Math.abs(size);

  // We are solving for `x` in this equation: 1024^x = size
  // log2(size)/log2(1024) === log2(size)/10 === log1024(size)
  const magnitude = Math.min(
    Math.floor(Math.log2(size || 1) / 10),
    UNITS.length
  );

  const formattedSize = parseFloat(
    (size / 1024 ** magnitude || 0).toFixed(3)
  ).toLocaleString(locale);

  return [prefix + formattedSize, ...UNITS[magnitude]] as [
    string,
    Units.short,
    Units.long
  ];
}
