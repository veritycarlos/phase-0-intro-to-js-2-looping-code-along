const names = ['Guadalupe', 'Ollie', 'Aki'];
let message = [];
function writeCards(names, event) {
    for (let i=0; i<names.length; i++) {
        message.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return message;
}

function countDown(value) {
    while (value >= 0) {
        console.log(value--);
    }
};