// it has a space complexity of O(1).
// it has best case of time complexity of O(n log n) and worst case of O(n^2) when data is already sorted.

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

function pivot(array, pivotIndex=0, endIndex=array.length-1) { 
    let swapIndex = pivotIndex
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
  
    return swapIndex
}

function quickSort(array, left=0, right=array.length-1) {
    if(left < right) {
        let pivotIndex = pivot(array, left, right)
        quickSort(array, left, pivotIndex-1)
        quickSort(array, pivotIndex+1, right)
    }
    return array
} 

           
quickSort([4,6,1,7,3,2,5])