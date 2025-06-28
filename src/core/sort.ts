/**
 * Sorts an array in ascending or descending order.
 *
 * @template T
 * @param {T[]} arr - The array to be sorted.
 * @param {'asc' | 'desc'} [order='asc'] - Sort order: ascending (`'asc'`) or descending (`'desc'`).
 * @returns {T[]} A new sorted array.
 *
 * @example
 * sort([3, 1, 2]); // [1, 2, 3]
 * sort(['a', 'b'], 'desc');  // ['b', 'a']
 */
export default function sort<T>(arr: T[], order: 'asc' | 'desc' = 'asc'): T[] {
  if (order !== 'asc' && order !== 'desc') {
    throw new TypeError(`Invalid sort order: '${order}'. Expected 'asc' or 'desc'.`);
  }

  return [...arr]
}
