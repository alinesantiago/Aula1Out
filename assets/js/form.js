function testaFormulario(e) {
    e.preventDefault();

    var peopleRaw = localStorage.getItem('people')
    if (peopleRaw != null) {
        var people = JSON.parse(peopleRaw)
    } else {
        var people = []; //sera array vazio  
    }


    if (id){
        people[id]={
            name: e.target.elements['name'].value,
            tel: e.target.elements['tel'].value,
            xp: (e.target.elements['xp'].value == 'true')
        }
    }else{
    people.push({
        name: e.target.elements['name'].value,
        tel: e.target.elements['tel'].value,
        xp: (e.target.elements['xp'].value == 'true')
    })}


    localStorage.setItem('people', JSON.stringify(people)) // correto!

    document.getElementById('goHome').click()
}

var urlPrincipal = new URL(window.location.href)


var id = (urlPrincipal.searchParams.get('person'))

if (id !== null) {
    var peopleRaw = localStorage.getItem('people')
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

