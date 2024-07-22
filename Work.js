// 1
const oddNumbers = (arr, arr2) => {
    const sum = []
    for (let i = arr; i <= arr2; i++) {
        if (i % 2 !== 0 ) {
            sum.push(i)
        }
    }
    return sum
}
console.log(oddNumbers(3, 15))

console.log(oddNumbers(3, 15)); // [3, 5, 7, 9, 11, 13, 15]

// 2-задание Уникальные символы
const uniqueChars = (str) => {
    const charCount = {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i];  
        if (charCount[char]) {
            return false
        }
        charCount[char] = true
    }

    return true
}

console.log(uniqueChars('Daniel'))
console.log(uniqueChars('express'))
console.log(uniqueChars('den'))
