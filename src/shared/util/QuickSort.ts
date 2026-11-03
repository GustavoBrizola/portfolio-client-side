/**
 * Quicksort is a sorting algorithm capable of faster sorting than others.
 * Uses Hoare partition technique and Divide and Conquer for faster performance.
 * It also use recursive methods with Hoare to sort all tha array.
 * @param {array} array The array to sort
 * @returns The array properly sorted
 *
 * @BigO O(n log(n))
 *
 * @credits
 * ```
 * Hoare Partition - Dr. "Joules BC" Beeston
 * https://eodl-webv-1.eo.uidaho.edu/drbc/cs395/4_hoares.html
 *
 * Grokking Algorithms - Aditya Y. Bhargava (2016)
 * 3 - Recursion    p. 37
 * 4 - Quicksort    p. 51
 * ```
*/
const QuickSort = (array: any) => {
    if(array.length < 2) return array;

    const pivot = array[0];
    let i = 1, j = array.length-1;

    while(true) {
        while(array[i] <= pivot && i < array.length-1) i++;
        while(array[j] >= pivot && j > 0) j--;
        if(i < j) {
            [array[i], array[j]] = [array[j], array[i]];
        } else {
            [array[0], array[j]] = [array[j], array[0]];
            break;
        }
    }

    const left = array.slice(0, j);
    const right = array.slice(j+1, array.length);
    array = [...QuickSort(left), pivot, ...QuickSort(right)];
    return array;
}

export default QuickSort;