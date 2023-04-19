///////////////////A function is Call ItSelf is Called Recursive function//////////////////////////////


function log(num){
    if(num > 5){
        return;
    }
    console.log(num);
    log(num + 1);
}

log(1);

//////////////////////////////////////

function countDown(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        countDown(nextNumber);
    }
}
countDown(3);
