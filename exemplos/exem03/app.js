const carros = []

const inModelo = document.getElementById("inModelo");
const inPreco = document.getElementById("inPreco");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnListar = document.getElementById("btnListar");
const btnFiltrar = document.getElementById("btnFiltrar");

const outLista = document.getElementById("outLista");

const adicionarCarro = () =>{
    const modelo = inModelo.value
    const preco = Number(inPreco.value)

    if(modelo === '' || preco === 0 || isNaN(preco)){
        alert('Digite os valores corretos')
        return
    }
    carros.push({modelo: modelo, preco: preco})
    console.log(carros)
};

btnAdicionar.addEventListener("click", reiniciarCarro);