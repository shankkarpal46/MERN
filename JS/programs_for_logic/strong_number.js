function strong(num) {
    strong_number = 0
    temp = num
    while(temp!=0){
        rem = temp % 10 
        strong_number += fact(rem)
        temp = Math.floor(temp/10)
    }

    if(strong_number == num){
        console.log(num,"is strong number.");
    }
}

function fact(rem) {
    factorial = 1
    for(let i=1;i<=rem;i++){
        factorial *= i
    }
    return factorial
}

strong(145)