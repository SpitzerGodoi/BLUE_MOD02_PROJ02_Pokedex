const fecharAlerta = document.querySelector("#fechar")
const alerta = document.querySelector("#alerta")

fecharAlerta.addEventListener("click", function (){
    alerta.style.display = "none"
})

setTimeout(() => {
    alerta.style.display = "none"
}, 5000)