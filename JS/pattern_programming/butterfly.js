for(let i=1;i<=4;i++){
    let pattern = ""
    for(let j=1;j<=i;j++){
        pattern +="*"
    }
    for(let k=1;k<=8-(2*i);k++){
        pattern +=" "
    }
    for(let l=1;l<=i;l++){
        pattern +="*"
    }
    console.log(pattern)
}
for(let i=1;i<=3;i++){
    let pattern = ""
    for(let j=1;j<=4-i;j++){
        pattern +="*"
    }
    for(let k=1;k<=2*i;k++){
        pattern +=" "
    }
    for(let l=1;l<=4-i;l++){
        pattern +="*"
    }
    console.log(pattern)
}