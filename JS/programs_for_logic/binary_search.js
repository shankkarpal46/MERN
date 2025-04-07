function BinarySearch(arr,target){
    let start = 0 
    let end = (arr.length)-1
    let mid = Math.floor((start+end)/2)
    sort(arr)

    while(start<=end){    
        mid = start + Math.floor((end-start)/2)    
        if(arr[mid] == target){
                return mid
            }
            else if(arr[mid]<target){
                start = mid+1
            }
            else if(arr[mid]>target){
                end = mid-1
            }
            else{
                return -1
            }
    }
}

function sort(arr) {
    for(let j=0;j<arr.length;j++){
        for(let i=0;i<arr.length;i++){
            temp = 0
            if(arr[i]>arr[i+1]){
                temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            }
        }
    }
    return arr
}

arr = [2,4,1,3]

target = 1

result = BinarySearch(arr,target)
if(result == -1){
    console.log("The element is not present in the array.")
}
else{
    console.log("The position of the",target,"is:",BinarySearch(arr,target))
}
