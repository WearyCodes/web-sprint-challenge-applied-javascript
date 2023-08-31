


const Card = (article) => {
const articleCard = document.createElement('div')
const articleHeadline = document.createElement('div')
const articleAuthor = document.createElement('div')
const articleImageContainer = document.createElement('div')
const articlePhoto = document.createElement('img')
const articleAuthorName = document.createElement('span')

articleCard.appendChild(articleHeadline)
articleCard.appendChild(articleAuthor)

articleAuthor.appendChild(articleImageContainer)
articleAuthor.appendChild(articleAuthorName)
articleImageContainer.appendChild(articlePhoto)


articleCard.classList.add('card')
articleHeadline.classList.add('headline')
articleAuthor.classList.add('author')
articleImageContainer.classList.add('img-container')

articleHeadline.textContent = article.headline
articlePhoto.src = article.authorPhoto
articleAuthorName.textContent = article.authorName
articleCard.addEventListener('click', ()=>{console.log(articleHeadline)})
  return articleCard
}
let articlestuff = []

 
    let cards = []
const cardAppender = (selector) => {
   axios.get('http://localhost:5001/api/articles').then(res => {
      let spot = document.querySelector(selector)
articlestuff.push(res.data.articles)

    articlestuff.forEach(article => {
      console.log(article)
spot.appendChild(Card(article.javascript[0]))
spot.appendChild(Card(article.javascript[1]))
spot.appendChild(Card(article.javascript[2]))
spot.appendChild(Card(article.javascript[3]))
spot.appendChild(Card(article.bootstrap[0]))
spot.appendChild(Card(article.bootstrap[1]))
spot.appendChild(Card(article.bootstrap[2]))
spot.appendChild(Card(article.technology[0]))
spot.appendChild(Card(article.technology[1]))
spot.appendChild(Card(article.technology[2]))
spot.appendChild(Card(article.jquery[0]))
spot.appendChild(Card(article.jquery[1]))
spot.appendChild(Card(article.jquery[2]))
spot.appendChild(Card(article.node[0]))
spot.appendChild(Card(article.node[1]))
    })
  
}
  ).catch(err => 'error')

}

export { Card, cardAppender }
