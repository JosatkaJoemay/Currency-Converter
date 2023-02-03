const valueInputNode = document.querySelector('.js-value-input'); //ввод суммы в инпут
const currencyInputNode = document.querySelector('.js-input-currency'); //выбор входящей валюты
const currencyOutputNode = document.querySelector('.js-output-currency'); // выбор выводимой валюты
const summOutputNode = document.querySelector('.js-summ-output'); // контейнер вывода

valueInputNode.addEventListener('input', changeHandler);

currencyOutputNode.addEventListener('change', changeHandler)

currencyInputNode.addEventListener('change', changeHandler)

function changeHandler() {
   const inputValue = Number(valueInputNode.value);
   const inputCurrency = currencyInputNode.value;
   const outputCurrency = currencyOutputNode.value;

   const result = getRatesValue(outputCurrency) / getRatesValue(inputCurrency) * inputValue;

   summOutputNode.textContent = result;
}