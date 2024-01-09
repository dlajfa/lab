const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const button = document.getElementById('button');
const resultEl = document.getElementById('result');
const valueEl = document.getElementById('value');
const categoriesEl = document.getElementById('categories');

button.addEventListener('click', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const height = Number(heightEl.value);
  const weight = Number(weightEl.value);
  const bmi = calculateBMI(height, weight);
  const category = categorize(bmi);
  valueEl.innerText = `${bmi.toFixed(1)} (${category})`;
  resultEl.removeAttribute('hidden');
  categoriesEl.removeAttribute('hidden');
}

function calculateBMI(height, weight) {
  return weight / (height ** 2);
}

function categorize(bmi) {
  if (bmi < 18.5) {
    return '体重过轻';
  } else if (bmi < 24) {
    return '正常体重';
  } else if (bmi < 28) {
    return '超重';
  } else {
    return '肥胖';
  }
}