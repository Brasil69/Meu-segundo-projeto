//const button = document.getElementsByTagName('button')[0]
//console.log(button)

const button = document.getElementById('convert-button')
console.log(button)
const select = document.getElementById('currency-select')

const dolar = 5.20
const euro = 5.90
const bitcoin = 109654.32

const convertValues = () => {
  //console.log('cliquei no botão')
  const inputReais = document.getElementById('input-real').value //função depois de executado o clique
  //console.log(input)
  const realValueText = document.getElementById('real-value-text')
  console.log(realValueText)
  const currencyValueText = document.getElementById('currency-value-text')
  console.log(currencyValueText)

  //realValueText.innerHTML = inputReais
  realValueText.innerHTML = new Intl.NumberFormat('pt-BR', //formatando para reais
    { style: 'currency', currency: 'BRL' }
  ).format(inputReais) // 'R$100.00'

  if (select.value === "US$ Dólar Americano") {
    //currencyValueText.innerHTML = inputReais / dolar
    currencyValueText.innerHTML = new Intl.NumberFormat('en-US', //formatando para dólares
      { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar) // '$100.00'
  }

  if (select.value === "€ Euro") {
    //formatando para Euro
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', //formatando para dólares
      { style: 'currency', currency: 'EUR' }
    ).format(inputReais / euro)
  }

  if (select.value === "Bitcoin") {
    //formatando para Euro
    currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', //formatando para dólares
      { style: 'currency', currency: 'BTC' }
    ).format(inputReais / bitcoin)
  }

  console.log(realValueText, currencyValueText)
}

changeCurrency = () => {
  //console.log('Fui chamada')
  const currencyName = document.getElementById("currency-name")
  const currencyImg = document.getElementById("currency-img")
  //console.log(select.value)
  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar Americano"
    currencyImg.src = "./figura eua.png"
  }
  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./euro.jpeg"
  }
  if (select.value === "Bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./bitcoin.jpeg"
  }

  convertValues()
}

button.addEventListener('click', convertValues) //o que executar depois do clique do mouse no button
select.addEventListener('change', changeCurrency) //o que executar depois do clique do mouse no button