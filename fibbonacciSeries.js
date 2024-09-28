function fibbo(n){
    let first =0;
    let last = 1;
    let nextNum;
    for(let i=1; i<n;i++){
        nextNum = first+last;
        console.log(nextNum)
        first = last;
        last = nextNum
    }
}

fibbo(10)

 1 2 3 5 8 13 21 34 55

1+2 =3
2+3 =5
3+5 =8
......
