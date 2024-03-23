const pacientes = [];
//entrada de dados
const inPaciente = document.getElementById("inPaciente");

//ações
const btnAdicionar = document.getElementById("btnAdicionar");
const btnAUrgencia = document.getElementById("btnAUrgencia");
const btnAtender = document.getElementById("btnAtender");

//saida de dados
const outAtendimento = document.getElementById("outAtendimento");
const outLista = document.getElementById("outLista");

const adicionarPaciente = () => {
    const paciente = inPaciente.value
    if(paciente === ''){
        alert('Preencha os dados corretamente')
        return
    }
    pacientes.push(paciente)

    let lista = ''
    pacientes.forEach((paciente, index)=>{
        return lista += `${index+1}. ${paciente} \n`
    })
    
    outLista.textContent = lista

    console.log(pacientes)
    inPaciente.value = ''
};
btnAdicionar.addEventListener("click", adicionarPaciente);

const adicionarUrgencia = () =>{
    const paciente = inPaciente.value
    if(paciente === ''){
        alert('Preencha os dados corretamente')
        return
    }
    pacientes.unshift(paciente)

    let lista = ''
    pacientes.forEach((paciente, index)=>{
        return lista += `${index+1}. ${paciente} \n`
    })
    
    outLista.textContent = lista

    console.log(pacientes)
    inPaciente.value = ''
}
btnAUrgencia.addEventListener('click', adicionarUrgencia)

const atenderPaciente = () => {
    if(pacientes.length === 0){
        alert('Não paciente na fila de espera')
        return
    }
    const atendimento = pacientes.shift()
    outAtendimento.textContent = atendimento

    let lista = ''
    pacientes.forEach((paciente, index)=>{
        return lista += `${index+1}. ${paciente} \n`
    })
    
    outLista.textContent = lista

}
btnAtender.addEventListener('click', atenderPaciente)