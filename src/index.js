module.exports = function toReadable (number) {
    const firstOrder = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','ten'];
    const secondOrder = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const thirdOrder = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', ]
    
    if(number >= 0 && number <=10) {
        console.log(firstOrder[number])
    }
    
    if(number >= 11 && number <=19) {
        console.log(secondOrder[number-11])
    }
    
    if(number >= 20 && number <=99) {
        let numberToString = number.toString();
        console.log(`${thirdOrder[numberToString[0]-2]} ${firstOrder[numberToString[1]]}`);
    }
    
    if(number === 100) {
        console.log('one hundred')
    }
    if(number >= 101 && number <=110) {
        let numberToString = number.toString();
        console.log(`one hundred ${firstOrder[numberToString[2]]}`)
    }
    
    if(number >= 111 && number <=119) {
        let numberToString = number.toString();
        console.log(`one hundred and ${secondOrder[numberToString[2]-1]}`);
    }
    
    if(number >= 120 && number <=999) {
        let numberToString = number.toString();
        console.log(`${firstOrder[numberToString[0]]} hundred ${thirdOrder[numberToString[1]-2]} ${firstOrder[numberToString[2]]}`);
    }
}
