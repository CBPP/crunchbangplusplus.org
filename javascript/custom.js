'use strict'

Array.prototype.forEach.call(document.getElementsByClassName('js-lightbox'),
  elm => elm.addEventListener('click', lightboxImage))

function lightboxImage (evt) {
  evt.preventDefault()
  console.log('making mask')
  const mask = document.createElement('div')
  mask.id = 'mask-cover'
  mask.style.transition = 'opacity 0.15s ease-in'
  mask.classList.add(
    'fixed',
    'top-0',
    'left-0',
    'w-100',
    'h-100',
    'bg-black-90',
    'flex',
    'items-center',
    'justify-center',
    'o-0',
    'pointer'
  )
  const imageView = document.createElement('img')
  imageView.src = evt.target.src
  imageView.classList.add('w-80')

  // @TODO find a better way than having this in a setTimeout
  setTimeout(() => { mask.classList.remove('o-0') }, 0)

  mask.appendChild(imageView)
  document.body.appendChild(mask)
  document.body.classList.add('overflow-hidden')
  mask.addEventListener('click', evt => {
    evt.preventDefault()
    mask.parentNode.removeChild(mask)
    document.body.classList.remove('overflow-hidden')
  })
}

document.getElementById('year').innerHTML = new Date().getUTCFullYear()
