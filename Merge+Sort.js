// merge sort uses recursion to sort. It has time complexity of O(n log(n)) and space complexity of O(n)

function merge(array1, array2) { // helper function used to merge two individually sorted arrays
    let combined = []
    let i = 0
    let j = 0
    while(i < array1.length && j < array2.length) {
        if(array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }
    while(i < array1.length) {
        combined.push(array1[i])
        i++
    }
    while(j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined
}

function mergeSort(array) {
    if(array.length === 1) return array

    let mid = Math.floor(array.length/2)
    let left = array.slice(0,mid)
    let right = array.slice(mid)
    
    return merge(mergeSort(left), mergeSort(right))   // here we used recursion
}


mergeSort([3,1,4,2])