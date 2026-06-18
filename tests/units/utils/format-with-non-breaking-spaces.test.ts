import { describe, it, expect } from 'vitest';
import {formatWithNonBreakingSpaces} from "@utils/format-with-non-breaking-spaces.ts";

describe('formatWithNonBreakingSpaces', () => {
  it('with a string with spaces, should return string with breaking spaces instead of spaces', () => {
    const input: string = 'this is an input';
    expect(formatWithNonBreakingSpaces(input)).toBe('this&nbsp;is&nbsp;an&nbsp;input');
  });
  it('with a string without spaces, should return same string', () => {
    const input: string = 'input';
    expect(formatWithNonBreakingSpaces(input)).toBe(input);
  });
  it('with a string with non-breaking spaces, should return same string', () => {
    const input: string = 'this&nbsp;is&nbsp;an&nbsp;input';
    expect(formatWithNonBreakingSpaces(input)).toBe(input);
  });
})
