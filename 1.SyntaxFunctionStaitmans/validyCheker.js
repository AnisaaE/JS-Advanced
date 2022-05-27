function checker(x1, y1, x2, y2){
    const isValid = (x1,y1,x2,y2)=>
      Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1),2))%1==0
   
    const arr = [
          [x1,y1,0,0], 
          [x2,y2,0,0],
          [x1,y1,x2,y2]]
    const printMsg= (a,b,c,d,validaty)=> 
    console.log(`{${a}, ${b}} to {${c}, ${d}} is ${validaty}`)  
    arr.forEach((x,i)=>
    isValid(...arr[i])?printMsg(...x, 'valid'):printMsg(...x, 'invalid'))
}checker(3, 0, 0, 4)