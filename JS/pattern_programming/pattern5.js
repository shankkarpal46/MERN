let row=5

for(let i=1;i<=row;i++){
    pattern =""

    for(let k=1;k<=i-1;k++){
        pattern +=" "
    }

    for(let j=1;j<=6-i;j++){
        pattern +="*"
    }

    console.log(pattern)
}