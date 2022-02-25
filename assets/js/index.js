var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else {
    var people = []
}

var people = [
    {
        name: 'Maria julia Lopes',
        tel: '11954628362',
        xp: true
    },
    {
        name: 'André Galvão Nascimento',
        tel: '11954628362',
        xp: false
    },
    {
        name: 'Gabriela Falcão Santiago Lima',
        tel: '954628362',
        xp: true
    },
    {
        name: 'Mário Queiroz Tamarin Dos Arcos',
        tel: '11954628362',
        xp: true
    }
];

function desenhaTabela() {


    currentLines = [...document.querySelectorAll('table.list tbody .dinamic-content')];
    currentLines.forEach((element) => {
        element.remove()
    })

    for (person in people) {
        document.querySelector('table.list tbody').innerHTML +=
            `<tr class="dinamic-content" style="background-color: ${((person % 2 == 0) ? '#fff' : '#eee')}">
                <td>
                    ${people[person].name}
                </td>
                <td>
                    ${people[person].tel}
                </td>
                <td>
                    ${(people[person].xp ? 'Sim' : 'Não')}
                </td>
                <td>
                    <button onclick="deleteUser(${person})"> Excluir </button>
                </td>
            </tr>`
    }

}


function deleteUser(p) {
    people.splice(p, 1);
    desenhaTabela();
    localStorage.setItem('people', JSON.stringify(people))
}


desenhaTabela()