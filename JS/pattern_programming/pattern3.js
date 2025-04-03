let row = 5

for(let i=1;i<=row;i++){
    let pattern=""
    for(let j=1;j<=6-i;j++){
       pattern +="*"
    }

    for(let k=1;k<=5-i;k++){
        pattern +=" "      
    }

    console.log(pattern)
}