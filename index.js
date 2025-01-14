
var currencyFormatter = require('currency-formatter');

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CONSTANTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

const SAVINGS_YEARS = 0; //Dinero que puedes ahorrar por año
const SAVINGS_NOW = 1000000; //Dinero que ya tienes ahorrado y con el cual iniciaras
const YEARS_OF_SAVING = 5; //Años que estaras ahorrando
const ANNUAL_INTEREST = 0.09; //Interes que ganaras anual


const formatMoney = amount => currencyFormatter.format(amount, { code: 'MX' });
const calculate_gain = (saving_for_now, year) => parseFloat((saving_for_now - SAVINGS_NOW - (year * SAVINGS_YEARS)));

let saving_calculate_years = SAVINGS_NOW;
let temp_gain_year = 0;

for (let i = 0; i < YEARS_OF_SAVING; i++) {
    saving_calculate_years += saving_calculate_years * ANNUAL_INTEREST;
    saving_calculate_years += SAVINGS_YEARS;
    temp_gain_year = calculate_gain(saving_calculate_years, i + 1) - temp_gain_year;
    console.table({
      Ahorro_por_año:  `$${formatMoney(parseFloat(saving_calculate_years.toFixed(2)))}`,
      Año_de_ahorro :i + 1,
      Ganancia_total: `$${formatMoney(calculate_gain(saving_calculate_years, i + 1))}`,
      Ganacia_por_año_actual: `$${formatMoney(temp_gain_year)}`
    });
}

console.table({
  Ahorros: `$${formatMoney(parseFloat(saving_calculate_years.toFixed(2)))}`,
  Años: YEARS_OF_SAVING,
  Ganancia: `$${formatMoney(calculate_gain(saving_calculate_years, YEARS_OF_SAVING))}`
})

