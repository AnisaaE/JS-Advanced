window.addEventListener("load", solve);

function solve() {
    let input={
      make: document.getElementById("make"),
      model: document.getElementById("model"),
      year:document.getElementById("year"),
      fuel:document.getElementById("fuel"),
     originalCost:document.getElementById("original-cost"),
     sellCost: document.getElementById("selling-price")
    }
    let publishButton = document.getElementById("publish");
   publishButton.addEventListener('click', publish)
   function publish(event){
    event.preventDefault();
    let name = input.make.value;
    let model = input.model.value
    let year = input.year.value
    let fuel = input.fuel.value
    let orgCost= input.originalCost.value;
    let sellCost = input.sellCost.value
     if (name=="" || model==""||
      year==""|| fuel=="" ||
       orgCost==""|| sellCost==""){
        return}

        if(input.originalCost.value>input.sellCost.value){
          return
        }
        let tr = document.createElement('tr');
        tr.className= 'row';
        tr.innerHTML= `<td>${name}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${fuel}</td>
        <td>${orgCost}</td>
        <td>${sellCost}</td>
        <td>
         <button class = "action-btn edit">Edit</button>
        <button class = "action-btn sell">Sell</button>
        </td>`
        document.getElementById("table-body").appendChild(tr)
        const editBtn = tr.querySelector(".edit")
       const sellBtn = document.querySelector(".sell")
        
       input.make.value=""
       input.model.value=""
       input.year.value=""
       input.fuel.value=""
       input.originalCost.value=""
       input.sellCost.value=""

        editBtn.addEventListener('click', edit)
        sellBtn.addEventListener('click', sell)
        function edit(){
          input.make.value= name
          input.model.value=model
          input.year.value=year
          input.fuel.value=fuel
          input.originalCost.value=orgCost
          input.sellCost.value= sellCost

          tr.remove()
        }
      function sell(ev){
        document.getElementById("cars-list").appendChild(ev.target.parentNode.parentNode)
        ev.target.parentNode.parentNode.remove()
        let li = document.createElement('li')
        li.className= 'each-list'
        li.innerHTML=`
         <span>${name} ${model}</span>
        <span>${year}</span>
        <span>${sellCost-orgCost}</span>
        `
        document.getElementById("cars-list").appendChild(li)

        let profit = document.getElementById("profit")
   let arr = Array.from(document.querySelectorAll("#cars-list li :nth-child(3)")).map(x=>Number(x.textContent))
     profit.textContent =(arr.reduce(function (a, b) {return a + b;}, 0).toFixed(2) ) 
      }

   }
}
