
function meuEscopo() {
    const form = document.querySelector('form')


    function Evento(evento) {
        evento.preventDefault()
        console.log(1)
        let resultado = document.querySelector('.dive')
        const a = document.querySelector('.a')
        const b = document.querySelector('.b')
        const c = document.querySelector('.c')

        const delta = (b.value**2) -(4 * a.value * c.value)

        const  resultado1 = (- b.value + Math.sqrt(delta))/(2 * a.value)
        const resultado2 = (- b.value - Math.sqrt(delta))/(2 * a.value)

       if(delta < 0){
        resultado.innerHTML = `Essa operação não possui raiz`
        }
        else if(resultado1 == resultado2){
            resultado.innerHTML = `Raiz: ${resultado1}`
        } 
        else{
            resultado.innerHTML = `Raizes: ${resultado1} e ${resultado2} `
        } 
    }
    form.addEventListener('submit', Evento)
}
meuEscopo();


// a = 9
// b = 6
// c = 1

// delta = b**2 -(4 * a * c)

// resultado1 = (- b + Math.sqrt(delta))/(2 * a)
// resultado2 = (- b - Math.sqrt(delta))/(2 * a)

// if(delta < 0){
//     console.log("Essa operação não possui resultado")
// }
// else if(resultado1 == resultado2){
//     console.log(`A raiz é ${resultado1}`)
// }
// else{
//     console.log(`As raízes são ${resultado1} e ${resultado2}`)
// }
// console.log(delta)