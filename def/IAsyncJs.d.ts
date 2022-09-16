interface IAsyncJs {
  series(arrayOrObject: any, callback);
  parallel(arrayOrObject: any, callback);
  waterfall(arrayOrObject: any, callback);
  forEach(array: any[], handler: (item, callback: (err) => void) => void, callback: (err) => void);
  forEachSeries(array: any[], handler: (item, callback: (err) => void) => void, callback: (err) => void);
  apply(fn, ...args: any[]);
}
