/**
 * Get random item from given array
 * @param arr - Input array
 */
export const randomItem = <T>(arr: T[]): T =>
  arr[Math.floor(Math.random() * (arr.length - 1))]
