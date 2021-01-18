//Napisz funkcję, która utworzy tablicę z 20 elementami i ją zwróci. Funkcja ta ma przyjmować dwa parametry tj. liczbę minimalną oraz maksymalną jaka może zostać wylosowana. W ciele tej funkcji wykorzystaj pętle `for` oraz obiekt `Math`

function randomArr(min, max) {
    const arr = [];
    for (let i = 1; i <= 20; i++) {
        const num = Math.round(Math.random() * (max - min) + min);
        arr.push(num);
    }
    return arr;
}

console.log(randomArr(1,20));


// kolejna funkcja ma przymować przez argument tablicę i sortować ją od wartości największej do najmniejszej. 

function sortedArr(arr) {
    const sorted = arr.sort(function(a,b) {
        return b - a;
    });
    return sorted;
}
let arr2 = randomArr(1,100);

console.log(sortedArr(arr2));




// Następnie ma zwrócić tablicę zawierającą tylko 10 największych liczb. W ciele funkcji możesz użyć metod `.sort()` oraz `.slice()`

function biggestTen(arr) {
    const biggest10 = arr.slice(0,10);
    return biggest10;
}

console.log(biggestTen(sortedArr(arr2)));



// Ostatnia funkcja ma obliczać [średnią arytmetyczną]


function getAvg(arr) {
    let sum = arr.reduce(function(a,b) {
        return (a+b);
    });
    let average = sum /  arr.length;
    return average;
    }
    


   
console.log(getAvg(biggestTen(sortedArr(arr2))));


// Wykorzystaj napisane funkcje w taki sposób, aby utworzyć tablicę składającą się z 20 losowych liczb z przedziału od 10 do 200. Z utworzonej tablicy wybiesz 10 największych i obliczych ich średnią arytmetyczną.


let oneTwoHundred = randomArr(1,200);

console.log(oneTwoHundred);
console.log(sortedArr(oneTwoHundred));
console.log(biggestTen(sortedArr(oneTwoHundred)));
console.log(getAvg(biggestTen(sortedArr(oneTwoHundred))));