let row = 5

for(let i=1;i<=row;i++){
    pattern =""
    for(let k=1;k<=5-i;k++){
        pattern +=" "
    }

    for(let j=1;j<=i;j++){
        pattern +="*"
    }

    console.log(pattern)
}

for(let i=1;i<=row;i++){
    pattern =""
    for(let j=1;j<=i;j++){
        pattern +="*"
    }

    for(let k=1;k<=4-i;k++){
        pattern +=" "
    }
    console.log(pattern)
}