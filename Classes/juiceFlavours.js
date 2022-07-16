function juiceFlavours(array) {
    let collection ={}
    let bottels ={}
    for (let el of array) {
        let [fruit, quantity]= el.split(' => ')
        if(!collection.hasOwnProperty(fruit)){
            collection[fruit]=0
        }
        collection[fruit]+=Number(quantity)
        if(collection[fruit]>=1000){
            if(!bottels.hasOwnProperty(fruit)){
                bottels[fruit]= 0
            }
            bottels[fruit]+= Math.floor(collection[fruit]/1000)
            collection[fruit]-=Math.floor(collection[fruit]/1000)*1000
        }
    }
    for (const key in bottels) {
       console.log(`${key} => ${bottels[key]}`)
    }
}
juiceFlavours(["Orange => 2000",
"Peach => 1432",
"Banana => 450",
"Peach => 600",
"Strawberry => 549",
]);
