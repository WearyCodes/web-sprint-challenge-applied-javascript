


const Tabs = (topics) => {
  const topicsDiv = document.createElement('div')
  topicsDiv.classList.add('topics')
  topics.forEach(topic => {
    const tab = document.createElement('div')
    tab.textContent = topic
    topicsDiv.appendChild(tab)
    tab.classList.add('tab')
  })
  console.log(topicsDiv)
  return topicsDiv
}


// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//


let stuff = []


// setTimeout(() => {
//   console.log(wearyData)
// }, 1500);


const tabsAppender = (selector) => {
  axios.get('http://localhost:5001/api/topics').then(res => 
{const wearyData = res
    wearyData.data.topics.forEach(topic => {
      stuff.push(topic)
    
})  
let thing = document.querySelector(selector)
  thing.appendChild(Tabs(stuff))
})
.catch(err => console.log('error', err))




  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
