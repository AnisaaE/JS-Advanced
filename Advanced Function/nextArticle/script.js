function getArticleGenerator(articles) {
    let parent = document.getElementById("content");
        
        return function creating(){
            let currText = articles.shift()
            if(currText!=undefined){
                 let newP= document.createElement('article')
             newP.textContent= currText
             parent.appendChild(newP)
            }
            }
}
