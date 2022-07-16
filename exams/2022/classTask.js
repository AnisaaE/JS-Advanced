class SmartHike{
      constructor(username){
          this.username= username;
          this.goals={};
          this.listOfHikes= [];
          this.resources= 100
      }

      addGoal (peak, altitude){
        if(this.goals.hasOwnProperty(peak)){
            return `${peak} has already been added to your goals`
        }
        else {
            this.goals[peak]= altitude
            return `You have successfully added a new goal - ${peak}`
        }
      }

      hike (peak, time, difficultyLevel){
        if(!this.goals.hasOwnProperty(peak)){
            throw new Error(`${peak} is not in your current goals`)
        }
        else if(this.resources==0){
            throw new Error(`You don't have enough resources to start the hike`)
        }
        let neededResources = time*10
        if(this.resources-neededResources<0){
            return "You don't have enough resources to complete the hike"
        }
        this.resources-=neededResources
        this.listOfHikes.push({peak:peak, time:time, difficultyLevel:difficultyLevel })
        return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
      }
     
      rest (time){
       this.resources+=time*10;
       if(this.resources>=100){
        this.resources=100
        return `Your resources are fully recharged. Time for hiking!`
       }

       return `You have rested for ${time} hours and gained ${time*10}% resources`
      }

      showRecord (criteria){
        if (this.listOfHikes.length==0){
            return`${this.username} has not done any hiking yet`
        }
        if(criteria=='all'){
          let sorted=  this.listOfHikes.map(x=>`${this.username} hiked ${x.peak} for ${x.time} hours`)
            
             return `All hiking records:\n${sorted.join("\n")}`
        } 
        if (criteria=='hard'){
            let hardArr =[];
             for(let  x of this.listOfHikes) {
                if (x.difficultyLevel=='hard'){
                  hardArr.push(x)
                }
                if(hardArr.length==0){
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                else {
                    hardArr.sort((a,b)=>(a.time)-(b.time))
                    return `${this.username}'s best ${criteria} hike is ${hardArr[0].peak} peak, for ${hardArr[0].time} hours`
                }
            }
            
        }
       
        if (criteria=='easy'){
            let easyArr =[];
             for(let  x of this.listOfHikes) {
                if (x.difficultyLevel=='easy'){
                  easyArr.push(x)
                }
                if(easyArr.length==0){
                    return `${this.username} has not done any ${criteria} hiking yet`
                }
                else {
                    easyArr.sort((a,b)=>(a.time)-(b.time))
                    return `${this.username}'s best ${criteria} hike is ${easyArr[0].peak} peak, for ${easyArr[0].time} hours`
                }
            }
            
        }

        
      }
     
}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));
