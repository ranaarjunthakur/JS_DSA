function allPairs(nums, target) {
    let pairs = [];
    let seen = new Set();

    for (let num of nums) {
        let complement = target - num;
        if (seen.has(complement)) {
            pairs.push([complement, num].sort((a, b) => a - b));
        }
        seen.add(num);
    }

    return pairs;
}

// Examples
console.log(allPairs([2, 4, 5, 3], 7)); 
console.log(allPairs([5, 3, 9, 2, 1], 3));
console.log(allPairs([4, 5, 1, 3, 6, 8], 9));
