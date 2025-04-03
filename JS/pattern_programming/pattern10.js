let row = 5
for(let i=1;i<=row;i++){
    let pattern = ""
    for(let j=1;j<=i-1;j++){
        pattern +=" "
    }
    for(let k=1;k<=11-(2*i);k++){
        pattern +="*"
    }
    console.log(pattern);
}