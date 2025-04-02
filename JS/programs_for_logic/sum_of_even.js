function sum_of_digit(num){
    sum = 0
    temp = num 
    while(temp!=0){
        rem = temp % 10
        if(rem % 2 == 0){
            sum += rem
        }
        temp = Math.floor(temp / 10) 
    }
        
    console.log("The sum of the ",num," is:",sum)
}

sum_of_digit(122)