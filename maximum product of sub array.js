problem - maximum product of sub array 
	let input = [2,5,-10,-3,0,4,5,8,-1];
        // output = 300
        // subArray  = [2,5,-10,-3];

function maxProductSubarray(nums) {
    if (nums.length === 0) return 0;
    
    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let current = nums[i];
        let tempMax = Math.max(current, maxProduct * current, minProduct * current);
        minProduct = Math.min(current, maxProduct * current, minProduct * current);
        maxProduct = tempMax;
        result = Math.max(result, maxProduct);
    }
    
    return result;
}

let input = [2, 5, -10, -3, 0, 4, 5, 8, -1];
let output = maxProductSubarray(input);
console.log(output); // Output: 300
