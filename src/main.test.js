import { setupCounter } from './counter.js';

describe('setupCounter', () => {
  let counterElement;

  beforeEach(() => {
    document.body.innerHTML = '<button id="counter" type="button"></button>';
    counterElement = document.getElementById('counter');
    setupCounter(counterElement);
  });

  test('initial counter value is 0', () => {
    expect(counterElement.innerHTML).toBe('count is 0');
  });

  test('increments counter value on click', () => {
    counterElement.click();
    expect(counterElement.innerHTML).toBe('count is 1');
  });

  test('applies red dashed border for multiples of 10', () => {
    for (let i = 0; i < 10; i++) {
      counterElement.click();
    }
    expect(counterElement.style.border).toBe('5px dashed red');
  });

  test('applies bold font weight for multiples of 5', () => {
    for (let i = 0; i < 5; i++) {
      counterElement.click();
    }
    expect(counterElement.style.fontWeight).toBe('bold');
  });

  test('applies larger font size for multiples of 3', () => {
    for (let i = 0; i < 3; i++) {
      counterElement.click();
    }
    expect(counterElement.style.fontSize).toBe('2em');
  });
});
