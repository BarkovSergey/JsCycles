const checkNumber = (a) => console.log(!(a % 2) ? a + ' четное' : a + ' нечетное');

const smallNumber = (b,c) => {
    let currentNumber = 1;
    if (b < c){
            while (currentNumber <= b){
            console.log(currentNumber);
            currentNumber++;
        }

    } else {
        while (currentNumber <= c){
            console.log(currentNumber);
            currentNumber++;
        }
    }
}
const smallNumberDo  = (b,c) => {
    let currentNumber = 1;
    if (b < c){
        do {
            console.log(currentNumber);
            currentNumber++;
        } while (currentNumber <= b);

    } else {
        do {
            console.log(currentNumber);
            currentNumber++;
        } while (currentNumber <= c);
    }
}
const smallNumberFor  = (b,c) => {
    if (b < c) {
        for (let currentNumber = 1; currentNumber <= b; currentNumber++) {
            console.log(currentNumber);
        }
    } else {
        for (let currentNumber = 1; currentNumber <= c; currentNumber++) {
            console.log(currentNumber);
        }
    }
}

const bigNumber = (d,e) => {
    let currentNumber = 1;
    if (d > e){
        while (currentNumber <= d){
            if (currentNumber % 2 === 0){
                console.log(currentNumber);
            }
            currentNumber++;
        }

    } else {
        while (currentNumber <= e) {
            if (currentNumber % 2 === 0) {
                console.log(currentNumber);
            }
            currentNumber++;
        }
    }
}
const bigNumberDo = (d,e) => {
    let currentNumber = 1;
    if (d > e){
        do {
            if (currentNumber % 2 === 0){
                console.log(currentNumber);
            }
            currentNumber++;
        } while (currentNumber <= d);

    } else {
        do  {
            if (currentNumber % 2 === 0) {
                console.log(currentNumber);
            }
            currentNumber++;
        } while (currentNumber <= e);
    }
}
const bigNumberFor  = (d,e) => {
    if (d > e) {
        for (let currentNumber = 1; currentNumber <= d; currentNumber++) {
            if (currentNumber % 2 === 0){
                console.log(currentNumber);
            }
        }
    } else {
        for (let currentNumber = 1; currentNumber <= e; currentNumber++) {
            if (currentNumber % 2 === 0) {
                console.log(currentNumber);
            }
        }
    }
}

const twoNumber = (n,m) => {
    let currentNumber = 1;
    while (currentNumber <= n) {
        console.log(currentNumber);
        if ((currentNumber * m) % 2 !== 0) {
        console.log(currentNumber * m);
        }
        currentNumber++;
    }
}
const twoNumberDo = (n,m) => {
    let currentNumber = 1;
    do  {
        console.log(currentNumber);
        if ((currentNumber * m) % 2 !== 0) {
            console.log(currentNumber * m);
        }
        currentNumber++;
    } while (currentNumber <= n);

}
const twoNumberFor  = (n,m) => {
        for (let currentNumber = 1; currentNumber <= n; currentNumber++) {
            console.log(currentNumber);
            if ((currentNumber * m) % 2 !== 0){
                console.log(currentNumber * m);
            }
        }
}

checkNumber(5);
smallNumberFor(13,3);
bigNumberDo(10,4);
twoNumber(7,3);






