function testaFormulario(e) {
    e.preventDefault();


    var phonePattern = /[^0-9-() ]+/g //cria parametro de acordo com a expressão regular. utilizei o site regexpal

    if (phonePattern.test(e.target.elements['tel'].value)) {
        alert('Apenas números são pemitidos! Verifique se inseriu o DDD no formato (xx)xxxxxxxxx')
        return false // não faça mais nada
    }

    if (e.target.elements['tel'].value.replace(/[-()]/g, '').length < 11) {
        alert('Número Inválido!')
        return false
    }

    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    } else {
        var people = []; //sera array vazio  
    }


    if (id) {  ///perguntar na aula a diferença entre esse if e o else
        people[id] = {
            name: e.target.elements['name'].value,
            tel: e.target.elements['tel'].value,
            xp: (e.target.elements['xp'].value == 'true')
        }
    } else {
        people.push({
            name: e.target.elements['name'].value,
            tel: e.target.elements['tel'].value,
            xp: (e.target.elements['xp'].value == 'true')
        })
    }


    localStorage.setItem('people', JSON.stringify(people)) // correto!

    document.getElementById('goHome').click()
}

var urlPrincipal = new URL(window.location.href)


var id = (urlPrincipal.searchParams.get('person')) //puxando parametros na página de listagem 

if (id !== null) {
    var peopleRaw = localStorage.getItem('people')  //diferenciando a pagina de cadastro para a página de edição.
    if (peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    } else {
        var people = []; //sera array vazio  
    }
    console.log(people[id])

    document.getElementById('name').value = people[id].name
    document.getElementById('tel').value = people[id].tel
    if (people[id].xp) {
        document.getElementById('xp-yes').checked = true
    } else {
        document.getElementById('xp-no').checked = true
    }

}




function testaCampo(txt) {  //mascara simples pt 1
    var phonePattern = /[^0-9-() ]+/g
    if (phonePattern.test(txt)){
        alert('Apenas números são pemitidos! Verifique se inseriu o DDD no formato (xx)xxxxxxxxx')
        return false // não faça mais nad
    }
        
if (txt.replace(/[-()]/g, '').length < 11) {
    alert('Número Inválido!')
    return false
}
}