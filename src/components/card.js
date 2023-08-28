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

articleCard.addClass('card')
articleHeadline.addClass('headline')
articleAuthor.addClass('author')
articleImageContainer.addClass('img-container')

articleHeadline.textContent = article.headline
articlePhoto.src = article.authorPhoto
articleAuthorName.textContent = artiocle.authorName



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

  axios.get('http://localhost:5001/api/articles').then(res => {
articlestuff.push(res.data.articles)}
  ).catch(err => 'error')
  console.log(articlestuff)

const cardAppender = (selector) => {
  let spot = document.querySelector(selector)
articlestuff.forEach(category => {
  category.forEach(article => {
    let cards = []
    cards.push(Card(article))
return cards
  })

})
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  cards.forEach(card => {
      spot.appendChild(card)
  })

}

export { Card, cardAppender }
