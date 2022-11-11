// Задание 1 с циклом for
/* let N = 2;
for (let i = 0; i < N; i++) {
    console.log("This is a string");
} */



// Задание 1 с циклом while
/* let N = 5;
count=0;
while (count < N) {
    console.log("This is a string");

    count++;
} */



// Задание 2 с циклом for
let avtoCount = 5000;
let sellDay = 1;
let avtoCountMin = 50;

for (let i = avtoCount; i > avtoCountMin; i /= 2) {
        sellDay ++;
    } 
    console.log ("На " + sellDay + " день " + "количество автомобилей меньше " + avtoCountMin);  


/* 
// Задание 2 с циклом while
let avtoCount = 2000;
let sellDay = 1;
let avtoCountMin = 50;
while (avtoCount > avtoCountMin) {
    sellDay++;
    avtoCount /= 2;        
}
console.log ("На " + sellDay + " день " + "количество автомобилей меньше " + avtoCountMin);   */



// Задание 3 с циклом while
let startYear = 1800;
let endYear = 2020;
const firstSpaceFlight = 1961;
let iteration = 0;
let i = 0;

while (startYear < endYear ) {
   startYear++;
   iteration++;
   if (startYear === firstSpaceFlight) {
    console.log ("Количество итераций до первого полета человека в космос " + iteration)
   };
   if (startYear % 4 === 0) {
    i++;
   }
}
console.log ("Високосных годов в диапазоне " + i);




