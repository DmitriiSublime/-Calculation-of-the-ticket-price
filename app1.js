let mainH1 = document.createElement('h1')
mainH1.innerText = 'Условия'

let myH2 = document.createElement('h2')
myH2.innerText = 'Цена билета на проезд стоит "100 рублей"'

let myH3 = document.createElement('h3')
myH3.innerText = 'Если тебе'

let firstP = document.createElement('p')
firstP.innerText = 'от 0-7 лет проезд бесплатный "0 рублей"'

let secondP = document.createElement('p')
secondP.innerText = 'с 8-18 лет проезд "60 рублей" (скидка 40%)'

let thirdP = document.createElement('p')
thirdP.innerText = 'с 18-55 лет проезд "100 рублей"'

let fifthP = document.createElement('p')
fifthP.innerText = 'с 55 лет проезд "80 рублей" (скидка 20%)'

let firstInput = document.createElement('input')
firstInput.setAttribute('type', 'number')

let firstButton = document.createElement('button')
firstButton.innerText = 'Рассчитать'

let secondButton = document.createElement('button')
secondButton.innerText = 'Очистить'

let totalSum = document.createElement('p')
totalSum.innerText = ''



firstButton.addEventListener('click', function(){
    let price = 100
    let age = firstInput.value

    if(age < 8){
      price = 0
    } 

    if(age > 7){
      price = price * 0.6
    }

    if(age > 17){
      price = price + 40
    }

    if(age > 54){
        price = price * 0.8
    }
    
   totalSum.innerText = `Стоимость билета ${price} рублей`
})

secondButton.addEventListener('click', function(){
    firstInput.value = ''
    totalSum.innerText = ''
})


let majorBody = document.querySelector('body')
majorBody.appendChild(mainH1)
majorBody.appendChild(myH2)
majorBody.appendChild(myH3)
majorBody.appendChild(firstP)
majorBody.appendChild(thirdP)
majorBody.appendChild(fifthP)
majorBody.appendChild(firstInput)
majorBody.appendChild(firstButton)
majorBody.appendChild(secondButton)
majorBody.appendChild(totalSum)


