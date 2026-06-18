export function formatWithNonBreakingSpaces(value: string) {
  return value.replaceAll(' ', '&nbsp;');
}
