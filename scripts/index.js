// https://jsonsources.github.io/Horario.json

async function Horario()
{
    let response = await fetch('https://jsonsources.github.io/Horario.json')
    let json = await response.json()

    let thead = document.querySelector('.thead-horario')
    let table = document.querySelector('.table-horario')
    let tbody = document.querySelector('.tbody-horario')

    let arrayKeys = Object.keys(json[0])

    let trThead = document.createElement('tr')

    arrayKeys.forEach(item => {

        let th = document.createElement('th')
        th.textContent = item

        trThead.appendChild(th)
        
    })

    thead.appendChild(trThead)

    json.forEach(item =>{

        let arrayValues = Object.values(item)

        let tr = document.createElement('tr')

        arrayValues.forEach(item => {

            let td = document.createElement('td')
            td.textContent = item

            tr.appendChild(td)
        })

        tbody.appendChild(tr)
    })
}

Horario()