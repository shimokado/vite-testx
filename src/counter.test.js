import { setupCounter } from './counter.js';

describe('setupCounter', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('button');
    document.body.appendChild(element);
    setupCounter(element);
  });

  afterEach(() => {
    document.body.removeChild(element);
  });

  test('should initialize counter to 0', () => {
    expect(element.innerHTML).toBe('count is 0');
  });

  test('should increment counter on click', () => {
    element.click();
    expect(element.innerHTML).toBe('count is 1');
  });

  test('should change border to thick red dashed line for multiples of 10', () => {
    for (let i = 0; i < 10; i++) {
      element.click();
    }
    expect(element.style.border).toBe('5px dashed red');
  });

  test('should change font weight to bold for multiples of 5', () => {
    for (let i = 0; i < 5; i++) {
      element.click();
    }
    expect(element.style.fontWeight).toBe('bold');
  });

  test('should change font size to 2em for multiples of 3', () => {
    for (let i = 0; i < 3; i++) {
      element.click();
    }
    expect(element.style.fontSize).toBe('2em');
  });

  test('should reset styles when not multiples of 10, 5, or 3', () => {
    for (let i = 0; i < 10; i++) {
      element.click();
    }
    expect(element.style.border).toBe('5px dashed red');
    element.click();
    expect(element.style.border).toBe('none');

    for (let i = 0; i < 4; i++) {
      element.click();
    }
    expect(element.style.fontWeight).toBe('bold');
    element.click();
    expect(element.style.fontWeight).toBe('normal');

    for (let i = 0; i < 2; i++) {
      element.click();
    }
    expect(element.style.fontSize).toBe('2em');
    element.click();
    expect(element.style.fontSize).toBe('1em');
  });
});
