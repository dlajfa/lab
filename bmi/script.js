const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const button = document.getElementById('button');

const resultEl = document.getElementById('result');
const valueEl = document.getElementById('value');
const categoriesEl = document.getElementById('categories');

button.addEventListener('click', handleSubmit);

heightEl.addEventListener('focus', event => {
  resetBorderColor(event, '厘米');
});

weightEl.addEventListener('focus', event => {
  resetBorderColor(event, '千克');
});

function handleSubmit(event) {
  event.preventDefault();

  const heightValid = validateInput(heightEl, 50, 250);
  const weightValid = validateInput(weightEl, 10, 1000);

  if (!heightValid || !weightValid) {
    return;
  }

  const height = Number(heightEl.value) / 100;
  const weight = Number(weightEl.value);

  const bmi = calculateBMI(height, weight);

  valueEl.innerText = bmi.toFixed(1);
  resultEl.removeAttribute('hidden');
  categoriesEl.removeAttribute('hidden');
}

function validateInput(inputEl, minValue, maxValue) {
  const value = Number(inputEl.value);

  if (value > minValue && value < maxValue) {
    return true;
  }

  inputEl.value = '';
  inputEl.setAttribute('placeholder', '无效数值');
  inputEl.classList.add('invalid');

  return false;
}

function calculateBMI(height, weight) {
  return weight / (height ** 2);
}

function resetBorderColor(event, placeholder) {
  const element = event.target;
  element.classList.remove('invalid');
  element.setAttribute('placeholder', placeholder);
}