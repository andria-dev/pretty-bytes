export declare namespace Units {
    type short = 'B' | 'KiB' | 'MiB' | 'GiB' | 'TiB' | 'PiB' | 'EiB' | 'ZiB' | 'YiB';
    type long = 'bytes' | 'kibibytes' | 'mebibytes' | 'gibibytes' | 'tebibytes' | 'pebibytes' | 'exbibytes' | 'zebibytes' | 'yobibytes';
}
export declare const UNITS: Array<[Units.short, Units.long]>;
export declare function format(size: number, locale?: string): [string, Units.short, Units.long];
