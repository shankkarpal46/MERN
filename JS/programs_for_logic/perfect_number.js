function perfect(num) {
    sum = 0
    temp = num
    for(i=1;i<temp;i++){
        
        if(temp%i==0){
            sum += i 
        }
    }

    if(sum == num){
        console.log(num,"is perfect")
    }
}

perfect(28)