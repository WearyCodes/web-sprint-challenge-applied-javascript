const Header = (title, date, temp) => {
  const header = document.createElement('div')
  const headerDate = document.createElement('span')
  const headerTitle =document.createElement('h1')
  const headerTemp = document.createElement('span')

  header.appendChild(headerDate)
  header.appendChild(headerTitle)
  header.appendChild(headerTemp)

  headerDate.textContent = date
  headerTitle.textContent = title
  headerTemp.textContent = temp

  header.classList.add('header')
  headerDate.classList.add('date')
  headerTemp.classList.add('temp')
  return header
}

const headerAppender = (selector) => {
  let spot = document.querySelector(selector)
  spot.appendChild(Header('Header', 'August 26, 2023', '110 degrees'))
}

export { Header, headerAppender }
