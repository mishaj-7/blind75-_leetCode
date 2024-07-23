function twoSum(arr, target) {
    let hashMap = {};

    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if (hashMap.hasOwnProperty(complement)) {
            return [ hashMap[complement],  i ];
        }

        hashMap[arr[i]] = i;
    }

    return null; // Return null if no such pair is found
}

console.log(twoSum([2, 7, 11, 15], 9)); // Prints { firstIndex: 0, secondIndex: 1 }





