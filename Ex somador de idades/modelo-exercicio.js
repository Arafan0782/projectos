
function verificar() {

    var txtano = document.getElementById('txtano')
    var res = document.getElementById('res')
    var agora = new Date()
    var anoAtual = agora.getFullYear()

    if (Number(txtano.value.length) == 0 || Number(txtano.value) > anoAtual) {
        alert('[ERRO!] Preenchi dados coretamente i bu tenta di nobo.')

    } else {

        var formAno = Number(txtano.value)
        var idade = anoAtual - formAno
        var img = document.createElement('img')
        //img.setAttribute('id', 'foto')

        var sexo = document.getElementsByName('radsexo')
        var genero = ''

        if (sexo[0].checked) {
            genero = 'Homem'

            document.body.style.backgroundColor = 'rgb(158, 11, 11)'

            if (idade >= 0 && idade < 10) {
                // bebe
               img.setAttribute('src', 'imagens/bebe-m.png')

            } else if (idade < 20) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-m.png')

            } else if (idade < 30) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-m.png')

            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-m.png')

            }


        } else if (sexo[1].checked) {
            genero = 'Mulher'

            document.body.style.backgroundColor = 'rgb(213, 151, 161)'

            if (idade >= 0 && idade < 10) {
                // bebe
               img.setAttribute('src', 'imagens/bebe-f.png')

            } else if (idade < 20) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-f.png')

            } else if (idade < 30) {
                // adulto
                img.setAttribute('src', 'imagens/adulto-f.png')

            } else {
                // idoso
                img.setAttribute('src', 'imagens/idoso-f.png')

            }
        }



        res.style.textAlign = 'center'
        res.innerHTML = `Bu cudji <strong>${genero}</strong>, i el i tene <strong>${idade}</strong> anos de idade.`
        res.appendChild(img)
    }



}