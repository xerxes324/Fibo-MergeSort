function merge(arr, L, M, R){
    let left = arr.slice(L, M+1)
    let right = arr.slice(M+1,R+1)
    let i = L , j = 0, k = 0;

    while( j < left.length && k < right.length ){

        if ( left[j] <= right[k]){
            arr[i] = left[j]
            j += 1
        }
        else{
            arr[i] = right[k]
            k += 1
        }
        i+=1
    }

    while (j < left.length){
        arr[i] = left[j]
        j+=1
        i+=1
    }
    while ( k < right.length){
        arr[i] = right[k]
        k+=1
        i+=1
    }

}



function mergesort(arr, l, r){
    //basecase
    if ( l == r ){
        return arr
    }
    let m = Math.floor((l+r) / 2)

    mergesort(arr,l,m)
    mergesort(arr, m+1,r)
    merge(arr,l,m,r)

    return arr
}


let arr1 = [3,4,5,2,3,8,1,0,7,12,1,0,3]
console.log(mergesort(arr1,0,arr1.length-1))