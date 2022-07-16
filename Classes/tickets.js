function tickets(array, criteria) {
  let result = [];

  class Ticket {
    constructor(d, p, s) {
      (this.destination = d), (this.price = Number(p)), (this.status = s);
    }
  }

  for (let ticket of array) {
    let [destination, price, status] = ticket.split("|");
    let flight = new Ticket(destination, price, status);
    result.push(flight);
  }
  result.sort((a,b)=>{
    if(typeof a[criteria]==='number'){
       return a[criteria] - b[criteria]
    }
    else{ 
        return a[criteria].localeCompare(b[criteria])
    }
    
  })

  return result
}
tickets([
"Philadelphia|94.20|available",
"New York City|95.99|available",
"New York City|95.99|sold",
"Boston|126.20|departed",
], "destination");
