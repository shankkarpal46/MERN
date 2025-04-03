let row = 5

for(let i=1;i<=row;i++){
    let stars =""
    for(let j=1;j<=i;j++){
        stars +="*" 
    }

    console.log(stars)
}
for(i=1;i<=row;i++){
    let pattern=""
    for(j=1;j<=5-i;j++){
       pattern +="*"
    }

    for(k=1;k<=5-i;k++){
        pattern +=" "      
    }

    console.log(pattern)
}