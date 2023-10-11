
function contar() {
    let txtinicio = document.getElementById('txtinicio')
    let txtfim = document.getElementById('txtfim')
    let txtpasso = document.getElementById('txtpasso')
    let res = document.querySelector('div#res')



    if (txtinicio.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {

        alert('[ERRO!] pui dados completo antes di bu na prosegui, sff.')
        res.innerHTML = `Impossivel contar!! Tenta di nobo mas.`
    } else {

        res.innerHTML = `Contando: `


        let inicio = Number(txtinicio.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        if (passo <= 0) {
            passo = 1
            alert('Passo na passa i sedo [1], pb i ca pudi sedo igual a [0].')
        }

        if (inicio < fim) { // ordem crescente 

            for (let contador = inicio; contador <= fim; contador += passo) {
                res.innerHTML += `${contador}`
                
                // Es i pa pui emoji
                if(contador < fim){
                    res.innerHTML += ` \u{1F449}`
                }else{
                    res.innerHTML += `.`
                }
            }

        } else if (inicio > fim) { // ordem decrescente

            for (let contador = inicio; contador >= fim; contador -= passo) {
                res.innerHTML += `${contador}`

                 // Es i pa pui emoji
                 if(contador > fim){
                    res.innerHTML += ` \u{1F449}`
                }else{
                    res.innerHTML += `.`
                }
            }

        }else if (inicio == fim || inicio == passo || passo == fim){

            alert('Sff pui dados ku correspondentes, tenta pui elis pa ca eh sedo igual, i bu tenta di nobo.')

            res.innerHTML = `Impossivel contar!! Tenta di nobo mas.`
        }


    }

    
   
    res.innerHTML += `<br> <br>  Fim di contagem. Si bu misti conta di nobo, i so bu pui utro dados ku misti novamente.  [Obrigado pela visita, empresa Arafam Abm na agradecei bu presenca.] `

}