function clearDisplay() {
  document.getElementById('display').innerText = '0';
}

function deleteLast() {
  let display = document.getElementById('display');
  if (display.innerText.length === 1) {
      display.innerText = '0';
  } else {
      display.innerText = display.innerText.slice(0, -1);
  }
}

function appendToDisplay(value) {
  let display = document.getElementById('display');
  if (display.innerText === '0' && value !== '.') {
      display.innerText = value;
  } else {
      display.innerText += value;
  }
}

function calculateResult() {
  let display = document.getElementById('display');
  try {
      display.innerText = eval(display.innerText);
  } catch (e) {
      display.innerText = 'Error';
  }
}
