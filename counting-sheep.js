const sheepJumping = function(numSheep) {
    if(numSheep === 0) {
        return 'All sheep jumped over the fence'
    }
    return `${numSheep}: Another sheep jumps over the fence ` + sheepJumping(numSheep - 1)
}