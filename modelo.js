function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique e tente novamente')       
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade <12) {
                // menino
                img.setAttribute('src', 'img-pessoas/menino.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img-pessoas/jovemM.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img-pessoas/adulto.png')
            } else {
                // idoso
                img.setAttribute('src', 'img-pessoas/idoso.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade <12) {
                // menina
                img.setAttribute('src', 'img-pessoas/menina.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'img-pessoas/jovemF.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'img-pessoas/adulta.png')
            } else {
                // idoso
                img.setAttribute('src', 'img-pessoas/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        img.style.display = 'block'
        img.style.margin = 'auto'
    }
}