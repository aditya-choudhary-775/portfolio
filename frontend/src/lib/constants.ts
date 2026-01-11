/**
 * Shared CSS class constants to reduce repetition across components
 */

export const BACKGROUND_PATTERN = [
  "bg-[radial-gradient(var(--color-gray-300),transparent_1px)]",
  "bg-size-[10px_10px]",
] as const;

export const BACKGROUND_PATTERN_BOLD = [
  "bg-[radial-gradient(var(--color-gray-400),transparent_1px)]",
  "bg-size-[10px_10px]",
] as const;

/**
 * Gets the background pattern classes as a string array
 * Can be spread into cn() or className arrays
 */
export const getBackgroundPattern = () => [...BACKGROUND_PATTERN];
export const getBackgroundPatternBold = () => [...BACKGROUND_PATTERN_BOLD];
