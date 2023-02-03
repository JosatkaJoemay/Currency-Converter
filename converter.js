const RATES = {
   usd: 0.014,
   euro: 0.013,
   lira: 0.25,
   ruble: 1,
};

function getRatesValue(money) {
   return RATES[money];
}

function convert(inputFuncCurrency, outputFuncCurrency) {
   return inputFuncCurrency * outputFuncCurrency;
}