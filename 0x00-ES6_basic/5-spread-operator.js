export default function concatArrays(array1, array2, string) {
  const mySpread = [...array1, ...array2, ...string];
  return mySpread;
}
