class List{
    constructor(){
         this.result=[];
         this.size = this.result.length
    }

    add(num){
       this.result.push(num)
       this.size= this.result.length
       this.result.sort((a,b)=>a-b)
    }
    get(index){
        if(index>=this.size|| index<0){
            throw new Error('Invalid index')
         }
        return this.result[index]
    }
    remove(index){
        if(index>=this.size|| index<0){
           throw new Error('Invalid index')
        }
      this.result.splice(index,1)
        this.size= this.result.length
       
    }
}let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1)); 

list.remove(1); console.log(list.get(1))