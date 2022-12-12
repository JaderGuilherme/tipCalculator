const button = document.querySelector("button");
const output = document.querySelector('.output')
const cost = document.querySelector('input')


button.addEventListener('click', () => {
    let gorgeta = cost.value
    let resultado = (gorgeta * 0.15).toFixed(2)

    output.innerHTML = `<h1>O valor da gorgeta é $${resultado}</h1>`
})