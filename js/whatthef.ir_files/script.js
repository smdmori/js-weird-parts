const contact = document.querySelector("#contact");

contact.addEventListener('mouseover', () => {
    document.querySelector('.fly1').classList.add('active')
    document.querySelector('.fly2').classList.add('active')
    document.querySelector('.fly3').classList.add('active')
    document.querySelector('.fly4').classList.add('active')
    document.querySelector('.fly5').classList.add('active')
})

contact.addEventListener('mouseout', () => {
    document.querySelector('.fly1').classList.remove('active')
    document.querySelector('.fly2').classList.remove('active')
    document.querySelector('.fly3').classList.remove('active')
    document.querySelector('.fly4').classList.remove('active')
    document.querySelector('.fly5').classList.remove('active')
})