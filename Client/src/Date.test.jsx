import { render, screen} from '@testing-library/react';
import { expect, afterEach, describe, expectTypeOf, assertType, assert } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';


import  {getCurrentDate} from './functions/Date';

describe('Function', () => {
  it('it gets current Date string', () => {
    expectTypeOf(getCurrentDate).toBeFunction()
    const date = getCurrentDate('-');
    expect(typeof(date)).toBe("string")
    screen.debug();
  });
});