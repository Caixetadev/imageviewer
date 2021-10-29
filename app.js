const input = document.querySelector('input')
const button = document.querySelector('button')
const container = document.querySelector('.container')
const containerAbout = document.querySelector('section')

input.addEventListener('keyup', e => {
    inputValue = e.target.value
    const getImage = imgSrc => {
        container.innerHTML = `
        
        <img src="${imgSrc}">
        
        `
    }
    button.addEventListener('click', () => {
        getImage(inputValue)
        containerAbout.style.display = 'none'
    })
})

