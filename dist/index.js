var t=[["B","bytes"],["KiB","kibibytes"],["MiB","mebibytes"],["GiB","gibibytes"],["TiB","tebibytes"],["PiB","pebibytes"],["EiB","exbibytes"],["ZiB","zebibytes"],["YiB","yobibytes"]];exports.format=function(i,e){void 0===e&&(e="en");var b=Math.min(Math.floor(Math.log2(i)/10),t.length);return[parseFloat((i/Math.pow(1024,b)).toFixed(3)).toLocaleString(e)].concat(t[b])};
//# sourceMappingURL=index.js.map
