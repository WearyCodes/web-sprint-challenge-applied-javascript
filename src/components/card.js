


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
articleImageContainer.appendChild(articlePhoto)
articleImageContainer.appendChild(articleAuthorName)

articleCard.classList.add('card')
articleHeadline.classList.add('headline')
articleAuthor.classList.add('author')
articleImageContainer.classList.add('img-container')

articleHeadline.textContent = article.headline
articlePhoto.src = article.authorPhoto
articleAuthorName.textContent = article.authorName
articleCard.addEventListener('click', ()=>{console.log(articleHeadline)})



  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
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

// articlestuff.forEach(category => {
//   category.forEach(article => {
//     cards.push(Card(article))
//   })
// console.log(cards)
// })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


  



}

export { Card, cardAppender }
