let row = 5

for(let i=1;i<=row;i++){
    pattern =""
    for(let k=1;k<=5-i;k++){
        pattern +=" "
    }

    for(let j=1;j<=i;j++){
        pattern +="*"
    }

    for(let j=1;j<i;j++){
        pattern +="*"
    }
    console.log(pattern)
}

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


// for(let i=1;i<=4;i++){
//     pattern = ""
//     for(k=1;k<=i*1;k++){
//         pattern +=" "
//     }
//     for(j=1;j<=9-(2*i);k++){
//         pattern +="*"
//     }

//     console.log(pattern)
// }
