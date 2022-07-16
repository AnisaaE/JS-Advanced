window.addEventListener("load", solve);

function solve() {
 
  let input= {
    title: document.getElementById("post-title"),
    category: document.getElementById('post-category'),
    content: document.getElementById("post-content")
  }
  const list ={
    review:document.getElementById("review-list"),
    published: document.getElementById("published-list")
  }
  document.getElementById('publish-btn').addEventListener("click",publish)
    function publish(){
       
      const title = input.title.value
      const category = input.category.value
      const content = input.content.value
      if(title==="" || category=="" || content==""){
        return;
      }
      const li = document.createElement('li')
      li.className="rpost"

      li.innerHTML=`<article>
        <h4>${title}</h4>
        <p>Category: ${category}</p>
        <p>Content: ${content}</p>
         </article>
        <button class= 'action-btn edit'>Edit</button>
        <button class= 'action-btn approve'>Approve</button>`
    
      const editBtn = li.querySelector('.edit');
      const approveBtn = li.querySelector(".approve")
      editBtn.addEventListener('click', edit)
      approveBtn.addEventListener("click", approve)
       list.review.appendChild(li)
    }

}
