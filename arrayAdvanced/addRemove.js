function addRemove (array){
    let count = 1
    const newArr = []
   const actions= {
       add: (x)=>newArr.push(x),
       remove: ()=> newArr.pop()
   }
   array.forEach(el => {
       actions[el](count++)
   });
   console.log(newArr.length!=0?newArr.join('\n'):"Empty")
}
