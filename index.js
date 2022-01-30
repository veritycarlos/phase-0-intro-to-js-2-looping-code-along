const names = ['Guadalupe', 'Ollie', 'Aki'];
let newArr = [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {
        newArr.push ( `Thank you, ${names[i]}, for the wonderful ${event} gift!` );
        debugger;
        }
    return newArr;
}

writeCards();

function countDown() {
    let countDown= 10;
    while (countDown >= 0) {
        console.log(countDown--);
        }
};