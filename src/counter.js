export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`

    // Change border style for multiples of 10
    if (counter % 10 === 0) {
      element.style.border = '5px dashed red';
    } else {
      element.style.border = 'none';
    }

    // Change font weight for multiples of 5
    if (counter % 5 === 0) {
      element.style.fontWeight = 'bold';
    } else {
      element.style.fontWeight = 'normal';
    }

    // Change font size for multiples of 3
    if (counter % 3 === 0) {
      element.style.fontSize = '2em';
    } else {
      element.style.fontSize = '1em';
    }
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}
