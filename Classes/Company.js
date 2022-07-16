class Company {
  constructor() {
    this.department = {};
  }
  addEmployee(name, salary, position, department) {
    if(!name || !salary || !position || !department || salary<0){
        throw new Error ('Invalid input!')
    }
    if (!this.department.hasOwnProperty(department)){
        this.department.department=[]
    }
    this.department.department.push({
      name: name,
      salary: salary,
      position: position,
    });
    console.log(`New employee is hired. Name: ${name}. Position: ${position}`)
  }

   bestDepartment(){
      let avrg =()=> {
          let deparmetns=[]
         for (const dep in this.department) {
             let count=0
             let allSalary = 0
              for (let singlePerson of department) {
               count++
               allSalary+=singlePerson.salary
              }
              let avrgSalPerDeparment= allSalary/count
              deparmetns.push([dep, avrgSalPerDeparment])
            }
            return deparmetns.reduce((a,b)=>Math.max(a[1],b[1]))
        }
      
      console.log(`Best Department is: ${avrg[0]}\nAverage salary: ${avrg[1]}`)
      console.log(this.department.avrg[0]) 
    }
 
}
let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
