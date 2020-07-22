const powerCalculator = function(base, exponent) {
    if (exponent < 0) {
        return 'exponent must be >= 0'
    }
    else if (exponent === 0) {
        return 1
    }
    return base * powerCalculator(base, (exponent - 1))
}