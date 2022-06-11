window.addEventListener('scroll', onScroll)
var img = document.querySelector("#logo-nav")
img.setAttribute('src', './assets/variacao-logo-sem-fundo.png')

onScroll()
function onScroll() {
  showNavOnScroll()
  showLogo()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  //verificar se a seção passou da linha
  //quais dados vou precisar?

  const sectionTop = section.offsetTop

  const sectionHeight = section.offsetHeight

  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  ///console.log(
  ///  'O topo da seção chegou ou passou da linha?', sectionTopReachOrPassedTargetline
  ///)

  //verificar se a base está abaixo da linha alvo
  //quais dados vou precisar?

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  //console.log(
  //  'O fundo da seção passou da linha?', sectionEndPassedTargetLine
  //)

  const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetLine
  
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }

}

function showNavOnScroll() {
  if (window.scrollY > 0) {
    navegacao.classList.add("scroll")
  } else {
    navegacao.classList.remove("scroll")
  }
}

img = document.querySelector("#logo-nav")
function showLogo() {
  if (window.scrollY > 0) {
    img.setAttribute('src', './assets/variacao-logo-branco-sem-fundo.png')
  } else {
    img = document.querySelector("#logo-nav")
    img.setAttribute('src', './assets/variacao-logo-sem-fundo.png')
  }
}

function showBackToTopButtonOnScroll() { 
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  img = document.querySelector("#logo-nav")
  document.body.classList.add('menu-expanded')
  img.setAttribute('src', './assets/variacao-logo-branco-sem-fundo.png')
}

function closeMenu() {
  img = document.querySelector("#logo-nav")
  document.body.classList.remove('menu-expanded')
  img.setAttribute('src', './assets/variacao-logo-sem-fundo.png')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`)
