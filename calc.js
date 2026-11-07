// Tank volume math, copied from Tank_Air_Gap_Calculator.xlsx.
// CHART[n] = gallons at n inches of liquid ("Strapping Chart" B5:B120, plus 0 in = 0 gal).
var TANK_HEIGHT_IN = 116;
var GAL_PER_BBL = 42;
var CHART = [
  0, 24.1, 67.94, 124.41, 190.92, 265.93, 348.42, 437.6, 532.84, 633.66,
  739.61, 850.35, 965.54, 1084.01, 1208.2, 1335.19, 1465.65, 1599.39, 1736.23, 1876.01,
  2018.57, 2163.74, 2311.41, 2461.42, 2613.74, 2767.99, 2924.31, 3082.49, 3242.44, 3404.03,
  3567.18, 3731.78, 3897.73, 4064.95, 4233.33, 4402.79, 4573.23, 4791.81, 5010.37, 5228.94,
  5447.51, 5666.08, 5884.65, 6103.22, 6321.79, 6540.36, 6758.93, 6977.5, 7196.07, 7414.64,
  7633.21, 7851.78, 8070.35, 8288.92, 8507.49, 8726.06, 8944.63, 9163.2, 9381.2, 9600.34,
  9818.91, 10037.48, 10256.05, 10474.62, 10693.19, 10911.76, 11130.33, 11348.9, 11567.47, 11786.04,
  12004.61, 12223.18, 12441.75, 12660.32, 12878.89, 13097.46, 13316.03, 13534.6, 13753.17, 13971.74,
  14190.31, 14408.88, 14627.45, 14846.02, 15064.59, 15283.16, 15501.73, 15720.3, 15939.87, 16157.44,
  16376.01, 16594.58, 16813.15, 17031.72, 17250.29, 17468.86, 17687.43, 17906, 18124.57, 18343.14,
  18561.71, 18780.28, 18998.85, 19217.42, 19435.99, 19654.56, 19873.13, 20091.7, 20310.27, 20528.84,
  20747.41, 20965.98, 21184.55, 21403.12, 21621.69, 21840.26, 22058.83
];

// Returns null for blank input, {error} for bad input, else {depth, gallons, barrels}.
// Fractional depths are linearly interpolated between chart rows.
function calcFromAirGap(text) {
  var s = String(text).trim().replace(',', '.');
  if (s === '') return null;
  var gap = /^\d*\.?\d+$|^\d+\.$/.test(s) ? Number(s) : NaN;
  if (!isFinite(gap) || gap < 0 || gap > TANK_HEIGHT_IN) {
    return { error: 'Check input (0–' + TANK_HEIGHT_IN + ' in)' };
  }
  var depth = TANK_HEIGHT_IN - gap;
  var lo = Math.floor(depth);
  var hi = Math.ceil(depth);
  var gallons = CHART[lo] + (CHART[hi] - CHART[lo]) * (depth - lo);
  return { depth: depth, gallons: gallons, barrels: gallons / GAL_PER_BBL };
}

if (typeof module !== 'undefined') {
  module.exports = { calcFromAirGap: calcFromAirGap, CHART: CHART };
}
