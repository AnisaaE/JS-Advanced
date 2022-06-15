function solve() {
  const input = {
    name: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date"),
  };

  const [_, openSection, inProgressSection, completeSection ]= Array.from(document.querySelectorAll('section')).map((e)=>e.children[1])
    document.getElementById('add').addEventListener('click', addTask)
  function addTask(event) {
    event.preventDefault()
    let article = document.createElement("article");
    article.appendChild(createEl("h3", input.name.value));
    article.appendChild(createEl("p", `Description: ${input.description.value}`));
    article.appendChild(createEl("p", `Due Date: ${input.date.value}`));
    const div = createEl("div", "", "flex");
    article.appendChild(div);
   
    let startButton = createEl("button",'Start' , 'green');
    div.appendChild(startButton);
    startButton.addEventListener('click', startFunc)
   
    const deleteButton =createEl("button", "Delete",'red' );
    deleteButton.addEventListener('click', deleteFunc);
    div.appendChild(deleteButton);
    const finishButton = createEl('button', 'Finish', 'orange')
    openSection.appendChild(article)

    Object.values(input).map(i=>i.value='')

    function deleteFunc(event){
      article.remove();
    }

    function startFunc(event){
        startButton.remove();
        div.appendChild(finishButton)
        inProgressSection.appendChild(article)
        
    }
    finishButton.addEventListener('click',finish )
    function finish(){
        div.remove()
        completeSection.appendChild(article)
    }
  }


  function createEl(type, content, classN) {
    let newEl = document.createElement(type);
    newEl.textContent = content;
    if (classN !== undefined) {
      newEl.className = classN;
    }
    return newEl;
  }
}
