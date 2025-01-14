
var currencyFormatter = require('currency-formatter');

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< CONSTANTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

const SAVINGS_YEARS = 0; //Dinero que puedes ahorrar por año
const SAVINGS_NOW = 1000000; //Dinero que ya tienes ahorrado y con el cual iniciaras
const YEARS_OF_SAVING = 5; //Años que estaras ahorrando
const ANNUAL_INTEREST = 0.09; //Interes que ganaras anual


const formatMoney = amount => currencyFormatter.format(amount, { code: 'MX' });

let saving_calculate_years = SAVINGS_NOW;

for (let i = 0; i < YEARS_OF_SAVING; i++) {
    saving_calculate_years += saving_calculate_years * ANNUAL_INTEREST;
    saving_calculate_years += SAVINGS_YEARS;
    console.table({
      Ahorro_por_año:  `$${formatMoney(parseFloat(saving_calculate_years.toFixed(2)))}`,
      Año_de_ahorro :i + 1
    });
}

console.table({
  Ahorros: `$${formatMoney(parseFloat(saving_calculate_years.toFixed(2)))}`,
  Años: YEARS_OF_SAVING,
  Ganancia: `$${formatMoney(parseFloat(saving_calculate_years - 4000 - (SAVINGS_YEARS * YEARS_OF_SAVING)).toFixed(2))}`
})

