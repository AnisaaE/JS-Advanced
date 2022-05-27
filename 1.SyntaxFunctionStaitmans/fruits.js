function fruit(type, grams, price){
    grams/=1000
console.log(`I need $${(grams*price).toFixed(2)} to buy ${grams.toFixed(2)} kilograms ${type}.`)
}
