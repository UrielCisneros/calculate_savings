

const ahorro_year = 0;
let ahorro_now = 1000000;
let years = 5;
let interes = 0.09;

for (let i = 0; i < years; i++) {
    ahorro_now += ahorro_now * interes;
    ahorro_now += ahorro_year;
    console.log('Uriel',{
      ahorro_now: ahorro_now.toFixed(2),
      year:i +1
    });
}


console.log(`Tienes $${ahorro_now.toFixed(2)} en ${years} años`);

console.log(`Ganancia es de <<< $${(ahorro_now - 4000 - (ahorro_year * years)).toFixed(2)} >>> en ${years} años`);
