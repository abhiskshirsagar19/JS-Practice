const A = [0, 4, 7, 1, 9, 5, 2, 3];

function bubbleSort(A) {
    let n = A.length;
    for (let i = 0; i < A.length; i++) {
        let swapped = false;
        for (let j = 0; j < A.length - 1 - i; j++) {
            if (A[j] > A[j + 1]) {
                let temp = A[j];
                A[j] = A[j+1];
                A[j+1]= temp;
                swapped =true;
            }
        }
        if(!swapped){
            break;
        }
    }
     dispalay(A)


}
function dispalay(A){
    for(let i = 0 ; i< A.length;i++){
        console.log(A[i])
    }
}
bubbleSort(A);
//dispalay(A);