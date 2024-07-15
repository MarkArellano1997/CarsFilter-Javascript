document.addEventListener('DOMContentLoaded',()=>{
    mostrarAutos(autos)
    optionyears()
})

    const resultado = document.querySelector('#resultado')
    const year = document.querySelector('#year')
    const marca = document.querySelector('#marca')
    const minimo = document.querySelector('#minimo')
    const maximo = document.querySelector('#maximo')
    const puertas = document.querySelector('#puertas')
    const transmision = document.querySelector('#transmision')
    const color = document.querySelector('#color')
    const optionCar = {
        marca: '',
        year: '',
        minimo:'',
        maximo:'',
        puertas:'',
        transmision:'',
        color:''
    }

    const yearActual = new Date().getFullYear()
    const yearCar = yearActual - 10

    marca.addEventListener('change', (e)=>{
        optionCar.marca = e.target.value
        
        filtrarAutos()
    })

    year.addEventListener('change', (e)=>{
        optionCar.year = e.target.value
        
        filtrarAutos()
    })

    minimo.addEventListener('change', (e)=>{
        optionCar.minimo = e.target.value
        
        filtrarAutos()
    })

    maximo.addEventListener('change', (e)=>{
        optionCar.maximo = e.target.value
        
        filtrarAutos()
    })

    puertas.addEventListener('change', (e)=>{
        optionCar.puertas = e.target.value
        
        filtrarAutos()
    })

    transmision.addEventListener('change', (e)=>{
        optionCar.transmision = e.target.value

        filtrarAutos()
    })

    color.addEventListener('change', (e)=>{
        optionCar.color = e.target.value

        filtrarAutos()
    })

function mostrarAutos(autos) {

    limpiarAutos()

    autos.forEach(auto => {
        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        const parrafo = document.createElement('P')
        parrafo.innerHTML = `${marca} ${modelo} - Año: ${year} - Precio: ${precio}- Trasmisión: ${transmision} - Numero de Puertas: ${puertas} - Color: ${color}`

        resultado.appendChild(parrafo)
    });

}

function noResultado() {

    limpiarAutos()

    const noResultado = document.createElement('DIV')
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resultados, elija otros parámetros de filtrado'

    resultado.append(noResultado)
}

function limpiarAutos() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}


function optionyears() {
    
    for (let i = yearActual; i > yearCar; i--) {
        const option = document.createElement('OPTION')
        option.value = i
        option.textContent = i
        year.appendChild(option)
        
    }

}

function filtrarAutos() {
    const resultadoFilter = autos.filter(filterMarca).filter(filterYear).filter(filterMin).filter(filterMax).filter(filterPuertas).filter(filterTansmision).filter(filterColor)

    if (resultadoFilter.length) {
        mostrarAutos(resultadoFilter)
    }else{
        noResultado()
    }
    
}

function filterMarca(auto) {
    if (optionCar.marca) {
        return auto.marca === optionCar.marca
    }else{
        return auto
    }
}

function filterYear(auto) {
    if (optionCar.year) {
        return auto.year === +optionCar.year
    }else{
        return auto
    }
}

function filterMin(auto) {
    if (optionCar.minimo) {
        return auto.precio >= +optionCar.minimo
    }else{
        return auto
    }
}

function filterMax(auto) {
    if (optionCar.maximo) {
        return auto.precio <= +optionCar.maximo
    }else{
        return auto
    }
}

function filterPuertas(auto) {
    if (optionCar.puertas) {
        return auto.puertas === +optionCar.puertas
    }else{
        return auto
    }
}

function filterPuertas(auto) {
    if (optionCar.puertas) {
        return auto.puertas === +optionCar.puertas
    }else{
        return auto
    }
}

function filterColor(auto) {
    if (optionCar.color) {
        return auto.color === optionCar.color
    }else{
        return auto
    }
}

function filterTansmision(auto) {
    if (optionCar.transmision) {
        return auto.transmision === optionCar.transmision
    }else{
        return auto
    }
}