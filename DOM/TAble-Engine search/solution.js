function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
       
   let searched = document.getElementById("searchField")
   let rows = document.querySelectorAll('tbody tr')
  
      function onClick() {
       for (let row of rows) {
         row.classList.remove('select')
         if(row.innerHTML.includes(searched.value)){
            row.className= 'select'
         }
       }
       input.value= ''
      }
