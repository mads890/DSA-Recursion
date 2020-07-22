const nthTriNumCalc = function(num) {
    if (num <= 0) {
        return 'please choose a positive integer'
    }
    if (num === 1) {
        return 1
    }
    return num + nthTriNumCalc(num - 1)
}