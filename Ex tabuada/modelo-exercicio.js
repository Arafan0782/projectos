
function tabuada() {

    let txtnum = document.getElementById('txtnum')
    let formulario = document.getElementById('seltab')

    if (txtnum.value.length == 0) {
        alert('[ERRO!] Pui dado inda antes di bu na prossegui sff.')

    } else {
        
        let numero = Number(txtnum.value)
        let contador = 1

        // Pa ca i bata acumula elementos dentro di formulario (Select), no na tem ku bata limpal inda antes di na bai mostra tabuada, assim pa i fica so elemento nobo ku introduzido.
        formulario.innerHTML = ` `

        while (contador <= 10){
            // Li na bai cria elemento dinamicamente pa pudi preenchi nha formulario, logo na bai cria elemento OPTION, pb dentro di SELECT pa pui elementos i so atraves di opcoes.

            let item = document.createElement('option')
            item.text = `${numero} x ${contador} = ${numero*contador}`
            item.value = `tab${contador}` // es i pa pui valor di value dinamicamente:  <option value="">Valor 1</option>

            formulario.appendChild(item)// Es i pa mostra item dentro di formulario

            contador++
        }
    }

}