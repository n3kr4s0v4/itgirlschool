//Пункт !
const grades = [];

for (let i = 0; i < 12; i++) {
    const grade = Math.floor(Math.random() * 100);
    grades.push(grade);
}
console.log(grades);

//Пункт 2
const gpaS = grades.reduce((sum, current) => sum + current, 0);
console.log(Math.floor(gpaS / grades.length));

//Пункт 3
const highPoint = Math.max.apply(Math, grades);
console.log(highPoint);

//Пункт 4
const lowPoint = Math.min.apply(Math, grades);
console.log(lowPoint);

//Пункт 5
const bestStuds = grades.filter (function (i){
    return i >= 60;
})
console.log(bestStuds.length);

//Пункт 6
const lowStuds = grades.filter (function (i) {
    return i < 60;
})
console.log(lowStuds.length);

//Пункт 7
for(let i = 0; i < grades.length; i++) {
    let gradeLetter;
    if (grades[i] >= 80 && grades[i] <= 100) {
        gradeLetter = "A";
    }
    else if (grades[i] < 80 && grades[i] >= 60) {
        gradeLetter = "B";
    }
    else if (grades[i] < 60 && grades[i] >=40) {
        gradeLetter = "C";
    }
    else if (grades[i] < 40 && grades[i] >=20) {
        gradeLetter = "D";
    }
    else {
        gradeLetter = "E";
    }

    console.log(grades[i] + " - " + gradeLetter);
}
