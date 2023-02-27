
const email = document.querySelector('#email')

/*tratar resultado*/


const showData = (result) =>  {
    for(const campo in result) {
            if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
                    
        }
        
    }

}



email.addEventListener("blur", (e) => {
    let search = email.value
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }



    fetch (`https://emailvalidation.abstractapi.com/v1/?api_key=6642cc0cd5fe4f34b5cbf15afa28b6d5&email=${search}`, options)
    .then((response)=>{response.json()
        .then( data => showData(data))
    
    })
    .catch( e => console.log('Deu erro: '+ e, message))
    
  

})
    