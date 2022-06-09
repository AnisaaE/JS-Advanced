function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
 
 function onClick() {
  let input = JSON.parse(document.querySelector("#inputs textarea").value);
  let bestRestaurant = document.querySelector('#bestRestaurant p');
  let bestRestaurantWorkers = document.querySelector("#workers p");

    let list = {};
    for (let el of input) {
      [restaurant, workers] = el.split(" - ");
      if (!list.hasOwnProperty(restaurant)) {
        list[restaurant] = {};
      }
      workers = workers.split(", ");
      for (let el of workers) {
        [worker, salary] = el.split(" ");
        list[restaurant][worker] = Number(salary);
      }
      let salaries = Object.values(list[restaurant]);
      let bestSalary = Math.max(...salaries).toFixed(2);
      list[restaurant]["bestSalary"] = bestSalary;
      let averageSalary = (
        salaries.reduce((a, b) => a + b, 0) / salaries.length
      ).toFixed(2);
      list[restaurant]["averageSalary"] = averageSalary;
    }
    let sorted = Object.entries(list).sort(
      (a, b) => b[1].averageSalary - a[1].averageSalary
    );
    let best = sorted[0];
    let bestResult = `Name: ${best[0]} Average Salary: ${best[1].averageSalary} Best Salary: ${best[1].bestSalary}`;
    bestRestaurant.textContent = bestResult
   let bestWorkers = Object.entries(best[1])
   bestWorkers= bestWorkers.slice(0, bestWorkers.length-2)
   let result =[]
   for (let el of bestWorkers) {
     result.push(`Name: ${el[0]} With Salary: ${el[1]}`)
   }
    bestRestaurantWorkers.textContent = result.join(' ')
  }
}
