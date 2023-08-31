


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
let stuff = []

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
}

export { Tabs, tabsAppender }
