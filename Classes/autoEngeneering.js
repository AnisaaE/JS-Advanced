function autoComapny(array){
    let collection = {};
     for (let car of array) {
        let[brand, model, production]= car.split(' | ')
         if(!collection.hasOwnProperty(brand)){
            collection[brand]={}
        } 
        if(!collection[brand].hasOwnProperty(model)){
            collection[brand][model]=0
        }
        collection[brand][model]+=Number(production)
    }
   for (const brand in collection) {
    console.log(brand)
    for (const key in collection[brand]) {
       console.log(`###${key} -> ${collection[brand][key]}`)
    }
   }

}autoComapny(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10'])