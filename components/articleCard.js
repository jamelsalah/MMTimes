function articleCard(params) {
    return `
        <div class='article--container'>
            <div class='article--text--container'>
                <h3>Nome da Categoria</h3>
                <h2>${params.title}</h2>
                <p class='article--date'>${params.date}</p>
                <p>${params.description}</p>
                <a href=${params.url} >Continue lendo...</a>
            </div>
            <div class='article--thumbnail--container'>
                <img src=${params.image}/>
            </div>
        </div>
    `
}