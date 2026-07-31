/**
 * Utility for conditionally joining class names.
 * Filters out falsy values and joins remaining with a single space.
 *
 * @example
 * cn("base-class", isActive && "active", className)
 * // => "base-class active extra-class"
 */
export function cn(
  ...classes: (string | false | null | undefined)[]
): string {
  return classes.filter(Boolean).join(" ");
}
