export function formatWithNonBreakingSpaces(value: string): string {
  return value.replaceAll(' ', '&nbsp;');
}
