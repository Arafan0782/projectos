
function clicar(){
    let txtnum = document.getElementById('txtnum')
    let formulario = document.getElementById('selform')

    if (txtnum.value.length == 0){
        alert('ERRO!!] Digita dados primeiro antes di bu na geri tabuada.')

    }else{

            let numero = Number(txtnum.value)
            
            formulario.innerHTML = ` ` // pa limpa smpr antes di na cunsa

            for(let contador = 1; contador <= 10; contador++){

                let item = document.createElement('option')
                item.text = `${contador} x ${numero} = ${contador*numero}`
                item.value = `valor${contador}` // es i pa conta valor
                formulario.appendChild(item)
            }
    }

}