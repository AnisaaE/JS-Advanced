function sameNum(num){
    num= String(num)
    let equality= true
    let sum = Number(num[0])
    for(let i= 0; i<num.length-1; i++){
        if(num[i]!=num[i+1]){
            equality= false
        }
        sum+=Number(num[i+1])
    }
    console.log(equality)
    console.log(sum)
}sameNum(1234)