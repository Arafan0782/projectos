

function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    //var agora = new Date()
    //var horaAtual = agora.getHours()
    var fundo = document.body.style

    var usuario = Number(prompt('Digita hora ku misti, i na mostrau imagem ku fundo di acordo di hora ku misti'))

    horaAtual = usuario

    alert(`Di acordo ku bu sugestao bu cudji ${usuario} horas. Toca [OK] pa odja bu resultado.`)



    if (horaAtual < 8) {
        // madrugada
        msg.innerHTML = `Na es momento i sta MADRUGADA.`
        msg.innerHTML += ` <br>I sta ${horaAtual} horas.`
        img.src = 'imagens/madrugada-rg.png'
        fundo.backgroundColor = '#DA7F3A'

    } else if (horaAtual >= 8 && horaAtual < 12) {
        // Bom dia
        msg.innerHTML = `BOM-DIA!`
        msg.innerHTML += ` <br>I sta ${horaAtual} horas.`
        img.src = 'imagens/manha-rg.png'
        fundo.backgroundColor = "#FEF8D6"
    } else if (horaAtual >= 12 && horaAtual < 19) {
        // Boa tarde
        msg.innerHTML = `BOA-TARDE!`
        msg.innerHTML += ` <br>I sta ${horaAtual} horas.`
        img.src = 'imagens/tarde-rg.png'
        fundo.backgroundColor = "#AD6863"
    } else {
        // Boa noite
        msg.innerHTML = `BOA-NOITE!`
        msg.innerHTML += ` <br>I sta ${horaAtual} horas.`
        img.src = 'imagens/noite-or.png'
        fundo.backgroundColor = "#022855"
    }
}