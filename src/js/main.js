const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        //verificar se o campo existe, pelo id do input
        if(document.querySelector("#"+campo)){
            //seleciona o valor do input e ele será igual a resultado que retorna um array
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}



//evento blur, quando o usuário tirar o foco do input
cep.addEventListener("blur",(e)=>{
    let search = cep.value.replace("-","")
    const options={
        method: "GET",
        mode:"cors",
        cache:"default"
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    //se der certo o acesso, retorna um arquivo json, e se esse arquivo json der certo, retorna o data
    .then(response=>{response.json()
        .then(data=>{
            showData(data)
        })})
        //se não, retorna deu erro
    .catch(e => console.log("Deu erro" + e.message))

})