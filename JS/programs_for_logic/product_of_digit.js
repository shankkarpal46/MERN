function product_of_digit(num){
    product = 1
    temp = num 
    while(temp!=0){
        rem = temp % 10
        product *= rem
        temp = Math.floor(temp / 10) 
    }
    
    console.log("The product of the ",num," is:",product)
}

product_of_digit(121)