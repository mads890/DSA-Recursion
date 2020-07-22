const binaryConverter = function(num) {
    if (num === 0) {
        return '0'
    }
    else if (num < 2) {
        return `${num % 2}`
    }
    else if (num % 2 !== 0) {
        return binaryConverter((num -1 )/2) + `${num % 2}`
    }
    return binaryConverter(num/2) + `${num % 2}`
}