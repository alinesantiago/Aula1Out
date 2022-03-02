function testaFormulario(e) {
    e.preventDefault();

    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    } else {
        var people = []; //sera array vazio  
    }

    people.push({
        name: e.target.elements['name'].value,
        tel: e.target.elements['tel'].value,
        xp: (e.target.elements['xp'].value == 'true' )
    })


    localStorage.setItem('people', Json.stringify(people))

    document.getElementById('goHome').click()

    console.log(people)
}
